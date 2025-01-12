import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function Piechart() {
  const data = {
    labels: ['Entertainment', 'Bill ', 'Others', 'Investment'],
    datasets: [
      {
        data: [30, 15, 35, 20],
        backgroundColor: [
          '#3B4B94', 
          '#FF6B00', 
          '#0000FF', 
          '#FF00FF', 
        ],
        borderWidth: 0,
        offset: 15,
      },
    ],
  };

  const options = {
    rotation: -70,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#FFFFFF',
        font: {
          size: 12,
        },
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return [
            `${label}`,
            `${value}%`,
          ];
        },
        textAlign: 'center',
        anchor: 'center', 
        align: 'center', 
        offset: -10, 
        padding: 20, 
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    elements: {
      arc: {
        radius: '95%', 
        hoverRadius: '100%',
      },
    },
  };

  return (
    <div>
      <div className="relative h-64 w-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
