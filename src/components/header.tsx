import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-barlow text-black-200">
          <Link to="/" className="text-black-00">
            FinanceFlow
          </Link>
        </h1>
        <nav>
          <Link to="/dashboard" className="text-green-600 ml-1">
            Dashboard
          </Link>

          <Link to="/signup" className="text-green-600 ml-4">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
