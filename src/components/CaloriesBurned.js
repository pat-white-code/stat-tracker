import React, { useEffect, useState } from 'react';
import BarChart from './data-viz/BarChart';
import styles from './styles/CaloriesBurned.module.scss';

const CaloriesBurned = props => {
  const  {
    CaloriesBurnedWrapper,
    caloriesForm
  } = styles;

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
  const [caloriesBurned, setCaloriesBurned] = useState('');
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
    addCaloriesData(caloriesData);
    setCaloriesBurned('');
    setDate('today');
  }

  return (
    <div>
      {caloriesData.length > 0 && 
        <div className={CaloriesBurnedWrapper}>
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
          <div className={caloriesForm}>
            <h2>
              Log new calories burned
            </h2>
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
          </div>
        </div>
      }
    </div>
  );
};

export default CaloriesBurned;