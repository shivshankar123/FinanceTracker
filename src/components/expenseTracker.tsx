import React, { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseTracker() {
  const { expense, addExpense, resetExpense, transactions } =
    useContext(FinanceContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (description.trim() === "" || isNaN(amount)) {
      alert("Please enter a valid expense description and amount.");
      return;
    }
    addExpense(parseFloat(amount), description); // Include description
    setDescription("");
    setAmount("");
  };

  const handleResetExpense = () => {
    resetExpense(); // Use the context function to reset expense
  };

  // Prepare data for Pie chart
  const categories = transactions.map((transaction) => transaction.description);
  const data = transactions.map((transaction) => transaction.amount);

  const chartData: ChartData<"pie"> = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: data,
        backgroundColor: [
          "#FF6384", // Pink
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333", // Text color of the legend
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || "";
            return `${label}: $${value.toFixed(2)}`;
          },
        },
      },
      title: {
        display: true,
        text: "Expense Distribution",
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border-2 border-gray-600">
        <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>
        <div className="flex flex-col mb-4 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Total Expenses:</h2>
            <p className="text-xl px-4 py-2 rounded-md bg-gray-100">
              ${expense.toFixed(2)}
            </p>
          </div>
          <div>
            <label htmlFor="expense" className="text-lg font-semibold mb-2">
              Expense Description:
            </label>
            <input
              type="text"
              id="expense"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter your expense description"
            />
          </div>
          <div>
            <label htmlFor="amount" className="text-lg font-semibold mb-2">
              Amount ($):
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter the amount"
            />
          </div>
          <button
            onClick={handleAddExpense}
            className="bg-red-500 text-white px-6 py-2 rounded-md mt-4 w-full"
          >
            Add Expense
          </button>
          <button
            onClick={handleResetExpense}
            className="bg-gray-500 text-white px-6 py-2 rounded-md mt-4 w-full"
          >
            Reset Expense
          </button>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Expense Distribution:
            </h2>
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
