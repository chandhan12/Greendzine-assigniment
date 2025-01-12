import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    title: {
      display: false,
    },
    datalabels: {
        display: false,
      },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true, 
      min: 0,            
      max: 800,         
      ticks: {
        stepSize: 200,   
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
  },
};

const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb','Mar'];
const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [150, 370, 180, 420, 400, 770, 210, 570,250],
      borderColor: 'rgb(63, 81, 255)',
      backgroundColor: 'rgba(63, 81, 255, 0.1)',
      tension: 0.4,
    },
  ],
};

export function BalanceHistory() {
  return (
    <div className="p-4 h-56 w-full">
      <Line options={options} data={data} />
    </div>
  );
}
