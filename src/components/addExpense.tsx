// AddExpense.js
import React, { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function AddExpense() {
  const [amount, setAmount] = useState("");
  const { addExpense } = useContext(FinanceContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      addExpense(value);
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter expense"
        className="border rounded px-3 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
