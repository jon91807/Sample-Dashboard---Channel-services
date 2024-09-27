import React from "react";
import { Pie } from "react-chartjs-2";

const SimplePieChart = ({ data }) => {
  // Define the chart data and options
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  const chartOptions = {
    // Add any chart options here (e.g., title, legend, etc.)
    responsive: true,
  };

  return <Pie data={chartData} options={chartOptions} />;
};

export default SimplePieChart;
