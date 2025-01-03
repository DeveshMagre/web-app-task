import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BusinessChart = ({ submittedDates }) => {
  const allData = [
    { label: "April", value: 30, date: "2024-04-01" },
    { label: "May", value: 40, date: "2024-05-01" },
    { label: "June", value: 50, date: "2024-06-01" },
    { label: "July", value: 60, date: "2024-07-01" },
    { label: "August", value: 70, date: "2024-08-01" },
  ];

  const filteredData = submittedDates
    ? allData.filter(
        (data) =>
          new Date(data.date) >= new Date(submittedDates.start) &&
          new Date(data.date) <= new Date(submittedDates.end)
      )
    : allData;

  const chartData = {
    labels: filteredData.map((d) => d.label),
    datasets: [
      {
        label: "Business Growth",
        data: filteredData.map((d) => d.value),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BusinessChart;
