import React, {useState, useEffect} from "react"
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import {hot} from "react-hot-loader/root"

import {Home} from "./Home"
import {RandomWalk2D as RandomWalk2D8} from "./demos/RandomWalk2D_8directions_class"
import {RandomWalk2D} from "./demos/RandomWalk2D"

import {MarginalTaxRate} from "./taxes/MarginalTaxRate"

import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Page = styled.div`
  display: inline-block;
`

const LeftPane = styled.div`
  width: 300px;
  background-color: #9ad7f3;
  height: 100vh;
  float: left;
  padding: 10px;
`

const RightPane = styled.div`
  height: 100vh;
  float: left;
`

const App = () => {
  return (
    <BrowserRouter>
      <Page>
        <GlobalStyle />
        <LeftPane>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/random-walk">Random Walk</Link>
            </li>
            <li>
              <Link to="/random-walk-8">Random Walk diagonals</Link>
            </li>
            <li>
              <Link to="/marginal-tax">MarginalIncomeTax</Link>
            </li>
          </ul>
        </LeftPane>
        <RightPane>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/random-walk" component={RandomWalk2D} />
            <Route path="/random-walk-8" component={RandomWalk2D8} />
            <Route path="/marginal-tax" component={MarginalTaxRate} />
          </Switch>
        </RightPane>
      </Page>
    </BrowserRouter>
  )
}

export default hot(App)
