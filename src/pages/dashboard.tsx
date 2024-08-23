import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 min-h-screen p-6 flex ">
        <main className="flex-grow p-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Welcome to Your Dashboard
            </h1>
            <p className="text-gray-700 mb-4 text-center">
              Here you can view and manage your financial data.
            </p>
            <div className="space-y-4">
              <Link
                to="/accountOverview"
                className="w-full bg-green-400 text-gray-800 py-2 px-4 rounded-md hover:bg-green-500 transition-colors block text-center"
              >
                View Account Overview
              </Link>
              <Link
                to="/manageBudget"
                className="w-full bg-red-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors block text-center"
              >
                Expense Tracker
              </Link>
              <Link
                to="/viewReport"
                className="w-full bg-green-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors block text-center"
              >
                View Report
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
