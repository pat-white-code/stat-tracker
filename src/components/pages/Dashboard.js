import React, {useState} from 'react';
import CaloriesBurned from '../CaloriesBurned';
import NutriPie from '../NutriPie';
import ScatterPlot from '../data-viz/ScatterPlot';
import DataPoint from '../data-viz/DataPoint';

const Dashboard = props => {
  const {loadImages, badRequest, images} = props;
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
      {images.length > 0 && (
        <svg width="800" height="800">
          <ScatterPlot 
            y={50} 
            x={50} 
            width={600}
            height={600}
            data={images} 
            dataPoint = {({x, y, url}) => <DataPoint url={url} x={x} y={y} />}
            />
        </svg>
      )}
      {images.length > 0 && images.map(i => (
        <>
          <img src={i.urls.small} alt={i.description} />
          <caption>{i.description}</caption>
        </>
      ))}
      <button onClick={loadImages}>Get Inspired</button>
      <button onClick={badRequest}>Make Bad Request</button>
    </div>
  )
}

export default Dashboard;