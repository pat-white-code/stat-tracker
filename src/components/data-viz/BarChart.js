import React, { useMemo } from 'react';
import * as d3 from 'd3';
import '../styles/BarChart.scss';
import Axis from './Axis';
import { meetsGoal } from '../../snippets/meetsGoal';
import Line from './Line';
// import {meetsGoal} from '../../snippets/meetsGoal'

const BarChart = props => {
  const {width, height, x, y, data, goal} = props;
  const yMax = d3.max(data.map(d=> d.calories_burned));

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
      .domain([0, Math.max(yMax, goal)]),
      [height, yMax, goal]
  )

  return (
    <g transform = {`translate(${x}, ${y})`}>
      <Line x1={0} y1={yScale(goal)} x2={width} y2={yScale(goal)} className='line' />
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