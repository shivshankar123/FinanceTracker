import React from "react";
import Cards from "../components/Cards";
import { FinanceProvider } from "../context/FinanceContext";

function AccountOverview() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 min-h-screen p-6 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
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
