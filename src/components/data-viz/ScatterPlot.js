import React, { useMemo } from 'react';
import * as d3 from 'd3';
import Axis from './Axis';


const Scatterplot = props => {
  const {width, height, data, dataPoint, x, y} = props;
  const maxX = d3.max(data.map(d => d.likes))
  const maxY = d3.max(data.map(d => d.downloads))

  const xScale = useMemo(()=> 
    d3
      .scaleLinear()
      .domain([0, maxX])
      .range([0, width]), 
      [width, maxX]
  )

    const yScale = useMemo(()=>
      d3
        .scaleLinear()
        .domain([0, maxY])
        .range([height, 0]), 
        [height, maxY])

  return (
    <g transform={`translate(${x}, ${y})`}>
        {data.map((d) => (
          dataPoint({likes: d.likes, downloads: d.downloads, x: xScale(d.likes), y: yScale(d.downloads), url:d.urls.small})
        ))}
        <Axis x={0} y={0} type='Left' scale={yScale} />
        <Axis x={0} y={height} scale={xScale} type="Bottom" />
      </g>
  )
}

export default Scatterplot;