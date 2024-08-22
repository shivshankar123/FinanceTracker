// FinanceContext.js
import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addBalance = (amount) => setBalance((prev) => prev + amount);
  const addIncome = (amount) => setIncome((prev) => prev + amount);
  const addExpense = (amount) => setExpense((prev) => prev + amount);

  const resetBalance = () => setBalance(0);
  const resetIncome = () => setIncome(0);
  const resetExpense = () => setExpense(0);

  return (
    <FinanceContext.Provider
      value={{
        balance,
        income,
        expense,
        addBalance,
        addIncome,
        addExpense,
        resetBalance,
        resetIncome,
        resetExpense,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
