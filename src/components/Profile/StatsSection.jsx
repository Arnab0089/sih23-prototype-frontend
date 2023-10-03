import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default function StatsSection() {
  // Define your data and options for the pie chart
  const data = {
    labels: ["Goal 1", "Goal 2", "Goal 3"],
    datasets: [
      {
        data: [30, 40, 30], // Example data, replace with your actual data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="stats-section">
      <h2>Stats</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}
