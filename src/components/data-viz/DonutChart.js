import React from 'react';
import * as d3 from 'd3';
import Path from '../data-viz/Path';

const DonutChart = ({data, height, width}) => {
  // data = [3, 2, 8, 7]
  // data = data.map(d => d.calories)
  const color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c'])
  const radius = Math.min(height, width) / 2;
  const pie = d3.pie().value(d => d.calories);
  const arc = d3.arc()
                .innerRadius(75)
                .outerRadius(radius);

  console.log(pie(data))
  return (
    <g transform={`translate(${width / 2 + radius / 2}, ${height / 2 + radius / 2})`}>
      {pie(data).map((d, i) => (
        <g className='arc'>
          <Path fill={color(i)} d={arc(d)}></Path>

        </g>
      ))}
    </g>
  )
}

export default DonutChart;