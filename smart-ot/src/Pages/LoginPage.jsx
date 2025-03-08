import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <form className="space-y-6" method="POST">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            name="login_username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            name="login_password1" 
            placeholder="Create a password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-start">
          <input 
            type="checkbox" 
            id="terms" 
            className="h-4 w-4 mt-1 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            Remember Me
          </label>
        </div>

        <button 
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 hover:underline"> Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;