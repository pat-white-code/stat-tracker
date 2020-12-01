import React from 'react';
import BarChart from '../data-viz/BarChart';

const data = [
  {day: 1,
  calories: 4500
  },
  {day: 2,
  calories: 3500
  },
  {day: 3,
  calories: 1500
  },
  {day: 4,
  calories: 2000
  },
  {day: 5,
  calories: 2500
  }
]

const Dashboard = () => {
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
        />
      </svg>
    </div>
  )
}

export default Dashboard;