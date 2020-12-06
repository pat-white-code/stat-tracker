import React, { useMemo } from 'react';
import * as d3 from 'd3';
import Axis from './Axis';
import DataPoint from './DataPoint';


const TimeLine = props => {
  const {width, height, data, x, y} = props;
  const maxX = d3.max(data.map(d => new Date(d.created_at)))
  const minX = d3.min(data.map(d => new Date(d.created_at)))
  const maxY = d3.max(data.map(d => d.downloads))
  console.log(minX, maxX);
  const xScale = useMemo(()=> 
    d3
      .scaleTime()
      .domain([minX, maxX])
      .range([0, width]), 
      [width, maxX, minX]
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
          <DataPoint likes={d.likes} downloads={d.downloads} x={xScale(new Date(d.created_at))} y={yScale(d.downloads)} url={d.urls.small} />
        ))}
        <Axis x={0} y={0} type='Left' scale={yScale} />
        <Axis x={0} y={height} scale={xScale} type="Bottom" />
      </g>
  )
}

export default TimeLine;