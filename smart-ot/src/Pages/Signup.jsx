import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section>
      <form className="space-y-6" method="POST">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            name="signup_username" 
            placeholder="john@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            name="signup_email" 
            placeholder="john@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            name="signup_password1" 
            placeholder="Create a password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input 
            type="password" 
            name="signup_password2" 
            placeholder="Confirm your password"
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
            I agree to the <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
            and <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
          </label>
        </div>

        <button 
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Account
        </button>

          <div className="text-center text-sm text-gray-600">
                  Already have an account?
                  <Link to="/login" className="text-blue-600 hover:underline"> Login</Link>
         </div>
      </form>
    </section>
  );
};

export default Signup;