import React from "react";
import Cards from "../components/Cards";
import { FinanceProvider } from "../context/FinanceContext";

function AccountOverview() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-sky-400 to-green-300 p-8">
      {" "}
      {/* Gradient background from sky blue to light green */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {" "}
        {/* White background for the cards container */}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Account Overview
        </h1>
        <FinanceProvider>
          <Cards />
        </FinanceProvider>
      </div>
    </div>
  );
}

export default AccountOverview;
