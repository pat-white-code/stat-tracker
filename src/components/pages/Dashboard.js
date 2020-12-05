import React, {useState} from 'react';
import CaloriesBurned from '../CaloriesBurned';
import NutriPie from '../NutriPie';

const Dashboard = props => {
  const {loadImages, badRequest} = props;
  const [calorieGoal, setCalorieGoal] = useState(1500);
  const handleCalorieChange = e => {
    setCalorieGoal(e.target.value)
  }
  return (
    <div>
      <select name="calorie-goal" id="calorie-goal" value={calorieGoal} onChange={handleCalorieChange}>
        <option value="500">500 Calories</option>
        <option value="1000">1000 Calories</option>
        <option value="1500">1500 Calories</option>
        <option value="2000">2000 Calories</option>
        <option value="2500">2500 Calories</option>
        <option value="3000">3000 Calories</option>
        <option value="4000">4000 Calories</option>
      </select>
      <CaloriesBurned calorieGoal={calorieGoal } />
      <NutriPie />
      <button onClick={loadImages}>Get Inspired</button>
      <button onClick={badRequest}>Make Bad Request</button>
    </div>
  )
}

export default Dashboard;