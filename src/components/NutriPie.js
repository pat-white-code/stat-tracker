import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import DonutChart from './data-viz/DonutChart';

const NutriComp = () => {
  const [nutrition, setNutrition] = useState(null);
  useEffect(()=> {
    d3.csv('/data/nutrition.csv', d => ({
      nutrition: d.nutrition, calories: +d.calories})
    ).then(d => setNutrition(d))
  }, [])

  const foods = {
    burger: {
      fat: 10,
      carbs: 20,
      protein: 30
    }
  }

  const handleClick = e => {
    console.log(e.target.value);
    const food = foods[e.target.value];
    const stateModel = [
      {
        nutrition: 'fat',
        calories: nutrition[0].calories + food["fat"]
      },
      {
        nutrition: 'carbs',
        calories: nutrition[1].calories + food["carbs"]
      },
      {
        nutrition: 'protein',
        calories: nutrition[2].calories + food["protein"]
      },
    ];
    setNutrition(stateModel)
  }
  return(
    <div>
      <h1>A breakdown of your nutrition</h1>
      <svg height={400} width={400}>
        <DonutChart height={300} width={300} data={nutrition} />
        {/* <DonutChart x={250} y={250} r={100} data={nutrition} /> */}
      </svg>
      <button value="burger" onClick={handleClick}>Add Burger</button>
      <button>Chicken</button>
      <button>Pizza</button>
      <button>Salad</button>
      <button>Oatmeal</button>
    </div>
  )
}

export default NutriComp;