import React, { useContext } from "react";
import { FinanceContext } from "../context/financeContext";

import React, { useContext } from "react";
import { FinanceContext } from "./FinanceContext";

const AddExpense = () => {
  const { addExpense } = useContext(FinanceContext);

  return (
    <button
      onClick={() => addExpense(100)}
      className="btn bg-red-500 text-white hover:bg-red-600 transition-colors py-2 px-4 rounded flex items-center"
    >
      <i className="fas fa-sync-alt mr-3"></i>
      <span>Add Expense</span>
    </button>
  );
};

export default AddExpense;
