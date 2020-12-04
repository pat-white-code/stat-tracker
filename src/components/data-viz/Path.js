import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const Path = ({ d, fill }) => {
  const [realD, setRealD] = useState(d);
  const [realFill, setRealFill] = useState(fill);

  const pathRef = useRef();

  useEffect(() => {
    let el = d3.select(pathRef.current);

    el.transition()
      .duration(800)
      .ease(d3.easeCubic)
      .attr("d", d)
      .attr("fill", fill)
      .on("end", () => {
        setRealD(d)
        setRealFill(fill)
      });
  }, [fill, d]);

  return <path d={realD} fill={realFill} ref={pathRef} />;
};

export default Path;
