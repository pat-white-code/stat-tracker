import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

const Circle = styled.circle`
  fill: steelblue;
  stroke: steelblue;
  stroke-width: 2px;
  fill-opacity: 0.5;
  transition: 500ms;
  &:hover{
    fill: red;
    stroke: red;
    cursor: pointer;
  }
`

const DataPoint = props => {
  const {x, y, url, likes, downloads} = props;
  const [r, setR] = useState(5)

  const handleMouseEnter = () => {
    setR(10)
  }

  const handleMouseLeave = () => {
    setR(5)
  }

  return (
    <a target="_blank" href={url} rel="noreferrer">
      <Tooltip title={
        <React.Fragment>
          <img src={url} alt={'img'} height="100" width="100" ></img>
          <caption>Likes: {likes}, Downloads: {downloads}</caption>
        </React.Fragment>} arrow>
  
        <Circle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cx={x} cy={y} r={r} />
      </Tooltip>
    </a>
  );
}

export default DataPoint;