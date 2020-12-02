import React, { useEffect, useState } from 'react';
import BarChart from './data-viz/BarChart';
import * as d3 from 'd3';

// const data = [
//   {day: 1,
//   burned: 4500,
//   consumed: 2000
//   },
//   {day: 2,
//   burned: 3500,
//   consumed: 2000
//   },
//   {day: 3,
//   burned: 1500,
//   consumed: 2000
//   },
//   {day: 4,
//   burned: 2000,
//   consumed: 2000
//   },
//   {day: 5,
//   burned: 2500,
//   consumed: 2000
//   }
// ]

const CaloriesBurned = props => {
  const [caloriesBurned, setCaloriesBurned] = useState([]);
  let data;
  useEffect(() => {
    d3.csv('/data/calories_burned_jan.csv').then(d => {
      setCaloriesBurned(d)
    })
  }, [])

  const {calorieGoal} = props
  return (
    <div>
      <h1>Calories Burned this Month</h1>
        <svg height="400" width="600">
          <BarChart 
            x={50}
            y={50}
            height={300} 
            width={500}
            data={caloriesBurned}
            goal={calorieGoal}
          />
        </svg>
    </div>
  );
};

export default CaloriesBurned;