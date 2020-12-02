import React, { useMemo } from 'react';
import * as d3 from 'd3';
import './BarChart.css';
import Axis from './Axis';
import { meetsGoal } from '../../snippets/meetsGoal';
// import {meetsGoal} from '../../snippets/meetsGoal'

const BarChart = props => {
  const {width, height, x, y, data, goal} = props;

  const xScale = useMemo(()=> 
    d3
      .scaleBand()
      .range([0, width])
      .domain(data.map(d => d.date))
      .padding(.3),
      [data, width]
  )
  const yScale = useMemo(()=> 
    d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, 3000]),
      [height]
  )

  return (
    <g transform = {`translate(${x}, ${y})`}>
      {data.map(data => {
        const {calories_burned, date} = data;
        return (
          <rect 
          width={xScale.bandwidth()} 
          height={height - yScale(calories_burned)}
          x={xScale(date)} 
          y={yScale(calories_burned)} 
          className={meetsGoal(calories_burned, goal, 1000, 'bravo', 'danger', 'bar' )}
          />)
      })}
      <Axis x={0} y={0} type='Left' scale={yScale} />
      <Axis x={0} y={height} type='Bottom' scale={xScale} />
    </g>
  )
}

export default BarChart;