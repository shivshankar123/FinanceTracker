import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/cards";

const Dashboard = () => {
  return (
    <>
      <Cards />
      <div>
        <main className="flex-grow p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Welcome to Your Dashboard
            </h1>
            <p className="text-gray-700 mb-4 text-center">
              Here you can view and manage your financial data.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-colors">
                View Account Overview
              </button>
              <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                <Link
                  to="/expenseTracker"
                  className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors text-center block"
                >
                  Expense Tracker
                </Link>
              </button>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                View Reports
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
