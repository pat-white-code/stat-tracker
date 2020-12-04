import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import DonutChart from './data-viz/DonutChart';

const NutriComp = () => {
  const [nutrition, setNutrition] = useState(null);
  useEffect(()=> {
    d3.csv('/data/gifts-likely.csv', d => ({
      stuffer: d.gift, percent: +d.percent})
    ).then(d => setNutrition(d))
  }, [!nutrition])

  return(
    <div>
      <h1>A breakdown of your nutrition</h1>
      <svg height={400} width={400}>
        <DonutChart height={300} width={300} data={nutrition} />
        {/* <DonutChart x={250} y={250} r={100} data={nutrition} /> */}
      </svg>
    </div>
  )
}

export default NutriComp;