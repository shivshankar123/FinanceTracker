import React from "react";
import Input from "./input";
import Button from "./button";

function Auth() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign up on <span className="text-green-500">MyFinanceFlow</span>
        </h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-5">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="mb-1 text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="mb-1 text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-colors"
          >
            Sign up with email and password
          </button>
          <p className="font-bold mb-20 text-center text-gray-800">Or</p>
          <button
            type="button"
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
          >
            Sign up With Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
