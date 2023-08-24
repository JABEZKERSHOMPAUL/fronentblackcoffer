import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const GroupedPieChart = ({ data }) => {
  // Count the occurrences of each topic
  const topicCounts = {};
  data.forEach(entry => {
    if (entry.topic in topicCounts) {
      topicCounts[entry.topic] += 1;
    } else {
      topicCounts[entry.topic] = 1;
    }
  });

  // Prepare data for the pie chart
  const chartData = {
    labels: Object.keys(topicCounts),
    datasets: [
      {
        data: Object.values(topicCounts),
        backgroundColor: Object.keys(topicCounts).map(() =>
          `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`
        ),
      },
    ],
  };

  return (
    <div>
      <Pie
        data={chartData}
        className="pie-chart"
        options={{
          plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

export default GroupedPieChart;
