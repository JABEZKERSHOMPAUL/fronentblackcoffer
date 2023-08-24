import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BubbleVis from '../graph/BubbleVis';

function Bubble() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios.get('http://localhost:8000/api/bubble')
      .then(response => {
        const data = response.data.res; // Assuming your response structure is similar
        setChartData(data);// Update the chart data state with the fetched data
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once after mount


  return (
    <div >
      
      <BubbleVis data={chartData} />
    </div>
  );
}

export default Bubble;
