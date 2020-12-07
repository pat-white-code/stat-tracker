import React, {useState} from 'react';
import CaloriesBurned from '../../containers/CaloriesBurned';
import NutriPie from '../NutriPie';
import ScatterPlot from '../data-viz/ScatterPlot';
import TimeLine from '../data-viz/TimeLine';
import ImgGrid from '../ImgGrid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonSpinner from '../../containers/ButtonSpinner';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dashboard = props => {
  const classes = useStyles();
  const {loadImages, badRequest, images} = props;
  const [calorieGoal, setCalorieGoal] = useState(1500);
  const [ imgDataDisplay, setImgDataDisplay ] = useState('scatter')

  const handleImgDataDisplayChange = (e) => {
    setImgDataDisplay(e.target.value)
  }

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
        <div>
          <button onClick={loadImages}>Get New Images</button>
          <ButtonSpinner>Load New Images</ButtonSpinner>
          <FormControl className={classes.formControl}>
            <InputLabel id='img-data-display'>Data Display</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={imgDataDisplay}
              onChange={handleImgDataDisplayChange}
            >
              <MenuItem value={'scatter'}>Scatter Plot</MenuItem>
              <MenuItem value={'timeline'}>TimeLine</MenuItem>
            </Select>
          </FormControl>
          {imgDataDisplay === 'scatter' ? (
            <svg width="1000" height="500">
            <ScatterPlot 
              y={50} 
              x={50} 
              width={900}
              height={400}
              data={images} 
              />
          </svg>
          ) : (
            <svg width="1000" height="500">
            <TimeLine 
              y={50} 
              x={50} 
              width={900}
              height={400}
              data={images} 
              />
          </svg>
          )}
          <ImgGrid images={images} />
        </div>
      )}
      <ButtonSpinner>Get Inspired</ButtonSpinner>
      <button onClick={loadImages}>Get Inspired</button>
      <button onClick={badRequest}>Make Bad Request</button>
    </div>
  )
}

export default Dashboard;