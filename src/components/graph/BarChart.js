import React from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  // Extract the sector, intensity, and color data from the provided 'data' prop
  const sectors = data.map(item => item.sector);
  const intensities = data.map(item => item.intensity);

  // Generate an array of colors based on the sectors
  const colors = generateColors(sectors);

  const chartData = {
    labels: sectors,
    datasets: [
      {
        label: 'Intensity',
        data: intensities,
        backgroundColor: colors,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Intensity',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Sector',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          color: 'white', // Set the legend label text color
        },
        title: {
          display: true,
          text: 'Sectors',
          color: 'white', // Set the legend title text color
        },
        onClick: null, // Disable clicking on legend items
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

// Function to generate an array of colors based on the sectors
function generateColors(sectors) {
  const colors = [];

  for (let i = 0; i < sectors.length; i++) {
    const color = `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}, 0.6)`;
    colors.push(color);
  }

  return colors;
}

// Function to generate a random number between min and max (inclusive)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default BarChart;
