// AddIncome.js
import React, { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function AddIncome() {
  const [amount, setAmount] = useState("");
  const { addIncome } = useContext(FinanceContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      addIncome(value);
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter income"
        className="border rounded px-3 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Income
      </button>
    </form>
  );
}

export default AddIncome;
