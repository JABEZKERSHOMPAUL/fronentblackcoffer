import React from 'react';
import Plotly from 'plotly.js/dist/plotly';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);


const BubbleVis = ({ data }) => {
  const plotlyData = data.map(entry => ({
    x: [entry.intensity],
    y: [entry.likelihood],
    text: [entry.sector],
    mode: 'markers',
    marker: {
      size: entry.intensity * 5,
      opacity: 0.5
    }
  }));


  const chartData = [
    {
      intensity: 12,
      likelihood: 4,
      country: 'Russia',
    },
    // Add more data points...
  ];
  const layout = {
    title: '',
    showlegend: false,
    xaxis: { title: 'Intensity' },
    yaxis: { title: 'Likelihood' }
  };

  return (
    <div >
      <Plot className="bubble-chart" data={plotlyData} layout={layout} />
    </div>
  );
};

export default BubbleVis;
