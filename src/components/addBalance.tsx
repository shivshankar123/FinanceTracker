// AddBalance.js
import React, { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

function AddBalance() {
  const [amount, setAmount] = useState("");
  const { setBalance } = useContext(FinanceContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      setBalance(value); // This sets the balance directly to the input value
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Set balance"
        className="border rounded px-3 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Set Balance
      </button>
    </form>
  );
}

export default AddBalance;
