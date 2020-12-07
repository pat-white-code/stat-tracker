import React, { useEffect } from 'react';
import BarChart from './data-viz/BarChart';
// import * as d3 from 'd3';

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
  const {
    caloriesData,
    loadCalories,
    calorieGoal,
    addCaloriesData
  } = props;

  useEffect(()=> {
    loadCalories()
  }, [])

  // const [dataCaloriesBurned, setDataCaloriesBurned] = useState([]);

  // useEffect(() => {
  //   d3.csv('/data/calories_burned_jan.csv', d=>({
  //     date: d.date,
  //     calories_burned: +d.calories_burned
  //     }
  //   )).then(d => {
  //     setDataCaloriesBurned(d)
  //   })
  // }, [])

  // const {calorieGoal} = props
  const handleCaloriesClick = (val) => {
    console.log(val + 1);
    let date = 'today'
    let caloriesData = {
      date,
      calories_burned: val
    }
    addCaloriesData(caloriesData)
  }

  return (
    <div>
      <h1>Calories Burned this Month</h1>
        {caloriesData.length > 0 && 
          <>
            <svg height="600" width="1000">
              <BarChart 
                x={50}
                y={50}
                height={500} 
                width={900}
                data={caloriesData}
                goal={calorieGoal}
              />
            </svg>
            <button onClick={()=>handleCaloriesClick(500)}>Burn 500 Calories</button>
          </>
        }
    </div>
  );
};

export default CaloriesBurned;