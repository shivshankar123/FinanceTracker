import React, { useContext, useState, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";

function Cards() {
  const {
    balance,
    income,
    expense,
    addBalance,
    addIncome,
    addExpense,
    resetBalance,
    resetIncome,
    resetExpense,
  } = useContext(FinanceContext);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [balanceInput, setBalanceInput] = useState(0);
  const [incomeInput, setIncomeInput] = useState(0);
  const [expenseInput, setExpenseInput] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="flex justify-center mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <div className="flex flex-col items-start mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Current Balance
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-5">
                ${balance.toFixed(2)}
              </p>
              <input
                type="number"
                value={balanceInput}
                onChange={(e) => setBalanceInput(Number(e.target.value))}
                className="input mb-2"
                placeholder="Enter amount"
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => addBalance(balanceInput)}
                  className="btn bg-green-500 text-white hover:bg-green-600 transition-colors py-2 px-4 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => addBalance(-balanceInput)}
                  className="btn bg-red-500 text-white hover:bg-red-600 transition-colors py-2 px-4 rounded"
                >
                  -
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                resetBalance();
                setBalanceInput(0);
              }}
              className="btn bg-gray-500 text-white hover:bg-gray-600 transition-colors py-2 px-4 rounded mt-4"
            >
              Reset Balance
            </button>
            <div className="border-t border-gray-200 my-5"></div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <p>Last updated: {formattedDate}</p>
              <p>Account: Checking</p>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <div className="flex flex-col items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Current Income
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-4">
                ${income.toFixed(2)}
              </p>
              <input
                type="number"
                value={incomeInput}
                onChange={(e) => setIncomeInput(Number(e.target.value))}
                className="input mb-2"
                placeholder="Enter amount"
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => addIncome(incomeInput)}
                  className="btn bg-green-500 text-white hover:bg-green-600 transition-colors py-2 px-4 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => addIncome(-incomeInput)}
                  className="btn bg-red-500 text-white hover:bg-red-600 transition-colors py-2 px-4 rounded"
                >
                  -
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                resetIncome();
                setIncomeInput(0);
              }}
              className="btn bg-gray-500 text-white hover:bg-gray-600 transition-colors py-2 px-4 rounded mt-4"
            >
              Reset Income
            </button>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <p>Last updated: {formattedDate}</p>
              <p>Account: Checking</p>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <div className="flex flex-col items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Expense
              </h2>
              <p className="text-3xl font-bold text-red-600 mb-4">
                ${expense.toFixed(2)}
              </p>
              <input
                type="number"
                value={expenseInput}
                onChange={(e) => setExpenseInput(Number(e.target.value))}
                className="input mb-2"
                placeholder="Enter amount"
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => addExpense(expenseInput)}
                  className="btn bg-green-500 text-white hover:bg-green-600 transition-colors py-2 px-4 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => addExpense(-expenseInput)}
                  className="btn bg-red-500 text-white hover:bg-red-600 transition-colors py-2 px-4 rounded"
                >
                  -
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                resetExpense();
                setExpenseInput(0);
              }}
              className="btn bg-gray-500 text-white hover:bg-gray-600 transition-colors py-2 px-4 rounded mt-4"
            >
              Reset Expense
            </button>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <p>Last updated: {formattedDate}</p>
              <p>Account: Checking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
