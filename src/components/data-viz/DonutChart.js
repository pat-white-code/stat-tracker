import React from 'react';
import * as d3 from 'd3';

const DonutChart = ({data, height, width}) => {
  const color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c'])
  return (
    <g transform={`translate(${width / 2}, ${height / 2})`}>

    </g>
  )
}

export default DonutChart;