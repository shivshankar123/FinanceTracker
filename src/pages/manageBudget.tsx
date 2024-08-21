import React from "react";
import ExpenseTracker from "../components/expenseTracker";

function ManageBudget() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <ExpenseTracker />
        </div>
      </main>
    </div>
  );
}

export default ManageBudget;
