import React, {useState, useEffect} from "react"
import {hot} from "react-hot-loader/root"

import {RandomWalk2D} from "./demos/RandomWalk2D_8directions_class"

const App = () => {
  return <RandomWalk2D />
}

export default hot(App)
