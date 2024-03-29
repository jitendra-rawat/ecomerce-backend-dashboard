import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; 

const OverviewComponent = () => {
  const [selectedInterval, setSelectedInterval] = useState('monthly');
  
  const handleIntervalChange = (e) => {
    setSelectedInterval(e.target.value);
  };

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Data',
        backgroundColor: '#5755FE',
        borderColor: 'white',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 50, 70, 90, 100, 120],
        borderRadius:10
      }
    ]
  };

  const quarterlyData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Quarterly Data',
        backgroundColor: '#8B93FF',
        borderColor: 'white',
        borderWidth: 1,
        data: [200, 300, 400, 500],
        borderRadius:10

      }
    ]
  };

  const yearlyData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Yearly Data',
        backgroundColor: '#7AA2E3',
        borderColor: 'white',
        borderWidth: 1,
        data: [800, 1000, 1200, 1500, 1800],
        borderRadius:10
      }
    ]
  };

  const data = {
    monthly: monthlyData,
    quarterly: quarterlyData,
    yearly: yearlyData
  };

  return (
    <div className="p-4 w-full bg-white">
      <div className="mb-4 flex justify-between items-center">

        <div className='flex-col'>
        <h4 className='font-poppins text-2xl text-gray-900'>Overview</h4>
        <h4 className='font-poppins text-base text-gray-500'>Monthly Earning</h4>

        </div>
    
        <select id="interval" className="p-2" value={selectedInterval} onChange={handleIntervalChange}>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>


      </div>
      <div className="w-full">
        <Bar
          data={data[selectedInterval]}
          options={{
            scales: {
              x: {
                type: 'category', 
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
          
        />
      </div>
    </div>
  );
};

export default OverviewComponent;
