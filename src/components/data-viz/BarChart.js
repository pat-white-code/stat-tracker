import React, { useMemo } from 'react';
import * as d3 from 'd3';
import './BarChart.css'

const BarChart = props => {
  const {width, height, x, y, data, goal} = props;

  const xScale = useMemo(()=> 
    d3
      .scaleBand()
      .rangeRound([0, width])
      .domain([0, 1, 2, 3, 4, 5])
      .padding(.3),
      [width]
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
      {data.map(data => (
        <rect 
          width={xScale.bandwidth()} 
          height={yScale(data.burned)}
          x={xScale(data.day)} 
          y={height - yScale(data.burned)} 
          className={
            `${data.burned > goal ? 'bravo' : 'bar'}
            ${data.burned < goal - 1000 ? 'danger' : 'bar'}`
            }
          />
      ))}
    </g>
  )
}

export default BarChart;