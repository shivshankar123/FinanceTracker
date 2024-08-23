import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AccountOverview from "./pages/AccountOverview";
import Signup from "./pages/Signup";
import ManageBudget from "./pages/ManageBudget";
import ViewReport from "./pages/ViewReport";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 p-4 shadow-lg">
        <div>
          <Router>
            <Header />
            <div className="container mx-auto">
              <Routes>
                <Route path="/accountOverview" element={<AccountOverview />} />
                <Route path="/viewReport" element={<ViewReport />} />
                <Route path="/manageBudget" element={<ManageBudget />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
