import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const Line = ({ x1, y1, x2, y2 }) => {
  const [realX1, setRealX1] = useState(x1);
  const [realX2, setRealX2] = useState(x2);
  const [realY1, setRealY1] = useState(y1);
  const [realY2, setRealY2] = useState(y1);

  const lineRef = useRef();

  useEffect(() => {
    let el = d3.select(lineRef.current);

    el.transition()
      .duration(800)
      .ease(d3.easeCubic)
      .attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)
      .on("end", () => {
        setRealX1(x1)
        setRealY1(y1)
        setRealX2(x2)
        setRealY2(y2)
      });
  }, [x1, y1, x2, y2]);

  return <line x1={realX1} y1={realY1} x2={realX2} y2={realY2} ref={lineRef} className='line' />;
};

export default Line;




// import React from 'react';


// const Line = ({x1, y1, x2, y2}) => {

// return (
//   <line x1={x1} y1={y1} x2={x2} y2={y2} className='line' />
//   )
// }

// export default Line;