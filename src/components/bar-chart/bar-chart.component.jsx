import React, { useState, useEffect } from "react";
import "./bar-chart.component.css";
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Events registration per month',
    },
  },
};

const BarChart = () => {
  const [data, setData] = useState({
    datasets: [],
   })
    useEffect(() => {
      setData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '',
            data: [700, 900, 800, 400, 1000, 500, 900, 300, 800, 650, 900, 600],
            backgroundColor: 'rgba(133, 118, 255, 1)',
          },
        ],
      })
    }, [])

  return(
    <div className="bar-component">
      <Bar options={options} data={data} className="components"/>
    </div>
  )
}

export default BarChart