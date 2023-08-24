import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GroupedPieChart from '../graph/GroupedPieChart'

function Pie1() {
    const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch your data from MongoDB and update the state
    axios.get('http://localhost:8000/api/groupchart')
      .then(response => {
        const data = response.data.res; // Assuming your response structure is similar
        setChartData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div >
    <GroupedPieChart data={chartData} />
  </div>  )
}

export default Pie1