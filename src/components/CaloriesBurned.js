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
  const [dataCaloriesBurned, setDataCaloriesBurned] = useState([]);

  useEffect(() => {
    d3.csv('/data/calories_burned_jan.csv', d=>({
      date: d.date,
      calories_burned: +d.calories_burned
      }
    )).then(d => {
      setDataCaloriesBurned(d)
    })
  }, [])

  const {calorieGoal} = props
  return (
    <div>
      <h1>Calories Burned this Month</h1>
        <svg height="600" width="1000">
          <BarChart 
            x={50}
            y={50}
            height={500} 
            width={900}
            data={dataCaloriesBurned}
            goal={calorieGoal}
          />
        </svg>
    </div>
  );
};

export default CaloriesBurned;