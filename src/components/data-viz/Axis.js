import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { useD3 } from 'd3blackbox';


const labelPos = ({type, scale}) => {

  switch (type) {
    case "Top":
      return { x: scale.range()[1] + 20, y: 0 };
    case "Right":
      return { x: 20, y: 0 };
    case "Bottom":
      return { x: scale.range()[1] + 25, y: 25 };
    case "Left":
      return { x: -25, y: 0 };
    default:
      return { x: -25, y: 0 };
  }
}

const Axis = ({x, y, scale, type, label}) => {
  const Text = styled.text`
    fill: black;
    font-family: sans-serif;
    font-size: 10px;
`;

  const gRef = useD3(anchor => {
    d3.select(anchor).call(d3[`axis${type}`](scale));
  })

  return(
    <g ref={gRef} transform={`translate(${x}, ${y})`}>
      <Text>{label}</Text>
      <Text {...labelPos({type, scale})}>{label}</Text>
    </g>
  )
}

export default Axis;