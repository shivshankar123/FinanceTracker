import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import ManageBudget from "./pages/manageBudget"; // Import ManageBudget

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/manageBudget" element={<ManageBudget />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
