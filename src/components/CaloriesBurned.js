import React from 'react';
import BarChart from './data-viz/BarChart';

const data = [
  {day: 1,
  burned: 4500,
  consumed: 2000
  },
  {day: 2,
  burned: 3500,
  consumed: 2000
  },
  {day: 3,
  burned: 1500,
  consumed: 2000
  },
  {day: 4,
  burned: 2000,
  consumed: 2000
  },
  {day: 5,
  burned: 2500,
  consumed: 2000
  }
]

const CaloriesBurned = props => {
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
            data={data}
            goal={calorieGoal}
          />
        </svg>
    </div>
  );
};

export default CaloriesBurned;