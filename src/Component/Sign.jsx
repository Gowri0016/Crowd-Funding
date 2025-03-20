import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sign() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Sign-Up Successful');
    navigate('/dashboard');
  };

  return (
    <div id="#" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>

        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
