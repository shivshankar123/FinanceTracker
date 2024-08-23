import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { FinanceContext } from "../context/FinanceContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const { transactions } = useContext(FinanceContext);

  // Aggregate expenses for chart data
  const categories = transactions.map(
    (transaction, index) => `Expense ${index + 1}`
  );
  const data = transactions.map((transaction) => transaction.amount);

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expense Chart",
      },
    },
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border-2 border-gray-600">
      <h2 className="text-2xl font-bold text-center mb-4">Expense Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default Chart;
