import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
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
