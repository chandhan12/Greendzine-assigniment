
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top' ,
        align: 'end' ,
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: false,
      },
      datalabels: {
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
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
    elements: {
      bar: {
        borderRadius: {
          topLeft: 20,
          topRight: 20,
          bottomLeft: 20,
          bottomRight: 20
        },
      },
    },
    barPercentage: 0.4, 
     categoryPercentage: 0.5,  
  };
  
  const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Withdraw',
        data: [450, 330, 320, 470, 150, 380, 390],
        backgroundColor: 'rgb(46, 91, 255)',
      },
      {
        label: 'Deposit',
        data: [230, 120, 260, 350, 230, 240, 330],
        backgroundColor: 'rgb(45, 206, 137)',
      },
    ],
  };
  
  export function WeeklyActivity() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm h-full w-auto m-4 ">
        
        <Bar options={options} data={data} />
      </div>
    );
  }