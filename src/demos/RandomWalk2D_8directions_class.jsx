import React from "react"
import {hot} from "react-hot-loader/root"

import "react-vis/dist/style.css"
import "react-vis/dist/styles/legends.scss"

import {XYPlot, LineSeries, MarkSeries} from "react-vis"

let rt = 1 / Math.sqrt(2)
rt = 1

export class RandomWalk2D extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{x: 0, y: 0}],
    }
    this.update = this.update.bind(this)
  }

  update() {
    const newData = [...this.state.data]
    const last = newData[newData.length - 1]
    const idx = Math.floor(Math.random() * 8)
    let dir = {x: 1, y: 0}
    if (idx === 1) {
      dir = {x: rt, y: rt}
    } else if (idx === 2) {
      dir = {x: 0, y: 1}
    } else if (idx === 3) {
      dir = {x: -rt, y: rt}
    } else if (idx === 4) {
      dir = {x: -1, y: 0}
    } else if (idx === 5) {
      dir = {x: -rt, y: -rt}
    } else if (idx === 6) {
      dir = {x: 0, y: -1}
    } else if (idx === 7) {
      dir = {x: rt, y: -rt}
    }
    newData.push({x: last.x + dir.x, y: last.y + dir.y})
    this.setState({
      data: newData,
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.update, 1)
  }

  componentDidUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {data} = this.state
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
}
