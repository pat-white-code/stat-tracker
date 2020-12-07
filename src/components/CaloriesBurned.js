import React, { useEffect, useState } from 'react';
import BarChart from './data-viz/BarChart';

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

  const [date, setDate] = useState('today');
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const handleDateChange = e => {
    setDate(e.target.value)
  }
  const handleCaloriesBurnedChange = e => {
    setCaloriesBurned(e.target.value)
  }

  const submitCaloriesData = (e) => {
    e.preventDefault();
    let caloriesData = {
      date,
      calories_burned: +caloriesBurned
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
            <form onSubmit={submitCaloriesData}>
            <select name="date-selector" id="date-selector" value={date} onChange={handleDateChange}>
              <option value="today"> Today </option>
              <option value="1/31">1/31 </option>
              <option value="1/30">1/30 </option>
              <option value="1/29">1/29 </option>
              <option value="1/28">1/28 </option>
              <option value="1/27">1/27 </option>
              <option value="1/26">1/26 </option>
              <option value="1/25">1/25 </option>
            </select>
            <input type='text' placeholder='Calories Burned' onChange={handleCaloriesBurnedChange} value={caloriesBurned}></input>
            </form>
            {/* <button onClick={()=>handleCaloriesClick(500)}>Burn 500 Calories</button> */}
          </>
        }
    </div>
  );
};

export default CaloriesBurned;