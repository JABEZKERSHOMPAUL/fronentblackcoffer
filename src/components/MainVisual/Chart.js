import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You might need to fetch the data using axios or a similar library
import BarChart from '../graph/BarChart';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch your data from MongoDB and update the state
    axios.get('https://blackcoofer.onrender.com/api/barchart')
      .then(response => {
        const data = response.data.res; // Assuming your response structure is similar
        setChartData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      
      <BarChart data={chartData} />
    </div>
  );
};

export default Chart;
