import React, {useMemo, useState, useEffect} from "react"
import {hot} from "react-hot-loader/root"

import "react-vis/dist/style.css"
import "react-vis/dist/styles/legends.scss"

import {incomeTaxRates} from "./IncomeTaxRates"

import {XYPlot, LineSeries, MarkSeries, XAxis, YAxis, DiscreteColorLegend} from "react-vis"
import styled from "styled-components"

const effectiveIncomeTax = (income, rates = incomeTaxRates) => {
  let total = 0
  for (var i = 0; i < rates.length; i++) {
    let rate = rates[i]
    if (income > rate.end) {
      total += (rate.end - rate.start) * rate.rate
    } else if (income > rate.start) {
      total += (income - rate.start) * rate.rate
    }
  }
  return income === 0 ? 0 : total / income
}

const marginalIncomeTax = (income, rates = incomeTaxRates) => {
  let rate = rates.find(r => r.start >= income)
  return rate ? rate.rate : rates[rates.length - 1].rate
}

const itterateTaxProfile = (fun, cap = 500000, step = 1000) => {
  let currentIncome = 0
  let marginalRates = []
  while (currentIncome <= cap) {
    marginalRates.push({x: currentIncome, y: fun(currentIncome)})
    currentIncome += step
  }
  return marginalRates
}

const LegendHolder = styled.div`
  position: absolute;
  bottom: 10%;
  right: 5%;
`

export const MarginalTaxRate = () => {
  const marginalIncome = useMemo(() => itterateTaxProfile(effectiveIncomeTax), [])
  const nextIncome = useMemo(() => itterateTaxProfile(marginalIncomeTax), [])

  console.log(nextIncome)

  return (
    <XYPlot width={750} height={750}>
      <LineSeries data={marginalIncome} color="blue" />
      <LineSeries data={nextIncome} color="red" />
      <XAxis title="income (£)" tickLabelAngle={-45} ticks={10} tickFormat={v => `£${v / 1000}K`} />
      <YAxis title="tax rate (p)" />
      <LegendHolder>
        <DiscreteColorLegend items={[{title: "Effective tax", color: "blue"}, {title: "Marginal tax", color: "red"}]} />
      </LegendHolder>
    </XYPlot>
  )
}
