import React, { useState, useEffect } from "react";

function Cards() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="flex justify-center mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <div className="flex flex-col items-start mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Current Balance
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-5">
                $1,000.00
              </p>
              <button className="btn bg-green-500 text-white hover:bg-green-600 transition-colors py-2 px-4 rounded flex items-center">
                <i className="fas fa-sync-alt mr-3"></i>
                <span>Add Balance</span>
              </button>
            </div>
            <div className="border-t border-gray-200 my-5"></div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <p>Last updated: {formattedDate}</p>
              <p>Account: Checking</p>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <div className="flex flex-col items-start mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Current Income
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-5">
                $1,000.00
              </p>
              <button className="btn bg-green-500 text-white hover:bg-green-600 transition-colors py-2 px-4 rounded flex items-center">
                <i className="fas fa-sync-alt mr-3"></i>
                <span>Add Income</span>
              </button>
            </div>
            <div className="border-t border-gray-200 my-5"></div>
            <div className="flex items-center justify-between text-gray-600 text-sm">
              <p>Last updated: {formattedDate}</p>
              <p>Account: Checking</p>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <div className="flex flex-col items-start mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Expense
              </h2>
              <p className="text-3xl font-bold text-red-600 mb-5">$1,000.00</p>
              <button className="btn bg-red-500 text-white hover:bg-red-600 transition-colors py-2 px-4 rounded flex items-center">
                <i className="fas fa-sync-alt mr-3"></i>
                <span>Add Expense</span>
              </button>
            </div>
            <div className="border-t border-gray-200 my-5"></div>
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
