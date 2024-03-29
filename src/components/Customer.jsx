import React from 'react';
import { Pie } from 'react-chartjs-2';

const CustomerComponent = () => {
  
  const totalNewCustomersPercentage = 65;

  // Data for the pie chart
  const data = {
    labels: ['Total New Customers', 'Remaining'],
    datasets: [
      {
        data: [totalNewCustomersPercentage, 100 - totalNewCustomersPercentage],
        backgroundColor: [
          '#8B93FF',
          '#FF71CD',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10 bg-white rounded-md shadow-md ">
      <h1 className="text-xl font-bold">Customer</h1>
      <h2 className="text-gray-600 text-sm mb-4">Customers that buy products</h2>
      <div className="w-full">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default CustomerComponent;
