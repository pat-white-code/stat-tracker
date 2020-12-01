import React, { useMemo } from 'react';
import * as d3 from 'd3';
import './BarChart.css'
{/* y={yScale(data.calories)}  */}
// height={height - yScale(data.calories)}
const BarChart = props => {
  const {width, height, x, y, data} = props;

  const xScale = useMemo(()=> 
    d3
      .scaleBand()
      .rangeRound([0, width])
      .domain([0, 1, 2, 3, 4, 5]),
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
          height={yScale(data.calories)}
          x={xScale(data.day)} 
          y={height - yScale(data.calories)} 
          className='bar'
          />
      ))}
    </g>
  )
}

export default BarChart;