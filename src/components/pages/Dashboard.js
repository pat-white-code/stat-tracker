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
import styles from '../styles/Dashboard.module.scss'


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
  const  {
    datavizSection,
    dashboardWrapper
  } = styles;
  const classes = useStyles();
  const { images } = props;
  const [calorieGoal, setCalorieGoal] = useState(1500);
  const [ imgDataDisplay, setImgDataDisplay ] = useState('scatter')

  const handleImgDataDisplayChange = (e) => {
    setImgDataDisplay(e.target.value)
  }

  const handleCalorieChange = e => {
    setCalorieGoal(e.target.value)
  }
  return (
    <div className={dashboardWrapper}>
      <div className={datavizSection}>
        <h1>Calories Burned this Month</h1>
        <p> Set your calorie goal below, and see how your stats compare with your goal. Green means you've acheived your goal. Blue means you are in a satisfactory range. Red means you are 1000 calories before your goal. Also you can use the input to add "today's" calories, or add more calories to a recent day.</p>
        <CaloriesBurned calorieGoal={calorieGoal } />
        <select name="calorie-goal" id="calorie-goal" value={calorieGoal} onChange={handleCalorieChange}>
          <option value="500">500 Calories</option>
          <option value="1000">1000 Calories</option>
          <option value="1500">1500 Calories</option>
          <option value="2000">2000 Calories</option>
          <option value="2500">2500 Calories</option>
          <option value="3000">3000 Calories</option>
          <option value="4000">4000 Calories</option>
        </select>
      </div>
      <div className={datavizSection}><NutriPie /></div>
      <div className={datavizSection}>
        <h1>Get Inspired</h1>
        <p>Fetch Images from unsplash API that will motivate you to achieve your desired goals. Change the data display to see different information about the photos. Hover over any dot to see what image it represents.</p>
        <ButtonSpinner query={'fitness'}>Fetch Images</ButtonSpinner>
      </div>
      {images.length > 0 && (
        <div>
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
    </div>
  )
}

export default Dashboard;