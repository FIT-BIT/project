import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieReport = ({ data }) => {
    const chartData = {
      labels: data.labels,
      datasets: [
        {
          data: data.values,
          backgroundColor: [
            '#F87171',
            '#60A5FA',
            '#FBBF24',
            '#34D399',
            '#A78BFA',
          ],
          hoverBackgroundColor: [
            '#F87171',
            '#60A5FA',
            '#FBBF24',
            '#34D399',
            '#A78BFA',
          ],
        },
      ],
    };
  
    return (
      <div className="w-64">
        <Pie data={chartData} />
      </div>
    );
  };
  
  export default PieReport;
  