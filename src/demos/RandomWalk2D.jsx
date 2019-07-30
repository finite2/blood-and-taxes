import React, {useState, useEffect} from "react"
import {hot} from "react-hot-loader/root"

import "react-vis/dist/style.css"
import "react-vis/dist/styles/legends.scss"

import {XYPlot, LineSeries, MarkSeries} from "react-vis"

export const RandomWalk2D = () => {
  const [data, setData] = useState([{x: 0, y: 0}])

  const update = () => {
    const newData = [...data]
    const last = newData[newData.length - 1]
    const idx = Math.floor(Math.random() * 4)
    const dir = idx === 0 ? {x: 1, y: 0} : idx === 1 ? {x: -1, y: 0} : idx === 2 ? {x: 0, y: -1} : {x: 0, y: 1}
    newData.push({x: last.x + dir.x, y: last.y + dir.y})
    setData(newData)
  }

  useEffect(() => {
    const interval = setInterval(update, 10)
    return () => clearInterval(interval)
  }, [data])
  // handtutorial

  return (
    <XYPlot width={750} height={750}>
      <LineSeries data={data} />
      <LineSeries data={data.slice(data.length - 50, data.length - 1)} color="orange" />
      <LineSeries data={data.slice(data.length - 10, data.length - 1)} color="red" />
      <MarkSeries data={[{x: 0, y: 0}]} color="red" />
      <MarkSeries data={[data[data.length - 1]]} color="black" />
    </XYPlot>
  )
}
