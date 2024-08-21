import React, { useContext } from "react";
import { FinanceContext } from "../context/financeContext";

const AddIncome = () => {
  const { addIncome } = useContext(FinanceContext);

  return (
    <button
      onClick={() => addIncome(100)}
      className="btn bg-green-500 text-white hover:bg-green-600 transition-colors py-2 px-4 rounded flex items-center"
    >
      <i className="fas fa-sync-alt mr-3"></i>
      <span>Add Income</span>
    </button>
  );
};

export default AddIncome;
