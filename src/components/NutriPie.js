import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import DonutChart from './data-viz/DonutChart';

const NutriComp = () => {
  const [nutrition, setNutrition] = useState([]);
  useEffect(()=> {
    d3.csv('/data/nutrition.csv', d => ({
      nutrition: d.nutrition, calories: +d.calories})
    ).then(d => setNutrition(d))
  }, [])

  const addBeer = () => {
    let nutritionClone = [...nutrition];
    const carbsIndex = nutritionClone.findIndex(elem => elem.nutrition === 'carbs');
    nutritionClone[carbsIndex].calories += 20;
    setNutrition(nutritionClone);
  }
  return(
    <div>
      <h1>A breakdown of your nutrition</h1>
      <button onClick={addBeer}>Add Beer</button>
      <svg height={400} width={400}>
        <DonutChart height={300} width={300} data={nutrition} />
        {/* <DonutChart x={250} y={250} r={100} data={nutrition} /> */}
      </svg>
    </div>
  )
}

export default NutriComp;