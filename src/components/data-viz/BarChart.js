import React, { useMemo } from 'react';
import * as d3 from 'd3';
import './BarChart.css';
import {meetsGoal} from '../../snippets/meetsGoal'

const BarChart = props => {
  const {width, height, x, y, data, goal} = props;

  const xScale = useMemo(()=> 
    d3
      .scaleBand()
      .rangeRound([0, width])
      .domain(data.map(d => d.date))
      .padding(.3),
      [data, width]
  )
  const yScale = useMemo(()=> 
    d3
      .scaleLinear()
      .rangeRound([0, height])
      .domain([0, 5000]),
      [height]
  )

  return (
    <g transform = {`translate(${x}, ${y})`}>
      {data.map(data => {
        const {calories_burned, date} = data;
        return (
          <rect 
          width={xScale.bandwidth()} 
          height={yScale(calories_burned)}
          x={xScale(date)} 
          y={height - yScale(calories_burned)} 
          className={'bar'}
          />)
      })}
    </g>
  )
}

export default BarChart;