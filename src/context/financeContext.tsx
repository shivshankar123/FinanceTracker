import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000);
  const [income, setIncome] = useState(1000);
  const [expense, setExpense] = useState(1000);

  const addBalance = (amount) => setBalance(balance + amount);
  const addIncome = (amount) => setIncome(income + amount);
  const addExpense = (amount) => setExpense(expense + amount);

  return (
    <FinanceContext.Provider
      value={{ balance, income, expense, addBalance, addIncome, addExpense }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
