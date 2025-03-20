import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Crowdfunding = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [totalRaised, setTotalRaised] = useState(0);
  const [contributors, setContributors] = useState([]);
  const currencyRates = {
    USD: 1,
    EUR: 0.91,
    INR: 82.75,
    GBP: 0.76,
    JPY: 150.3
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }
    processPayment(amount);
  };

  const processPayment = (amount) => {
    console.log(`Processing payment of $${amount}`);
    setTotalRaised(prev => prev + parseFloat(amount));
    setContributors([...contributors, { id: contributors.length + 1, amount }]);
    setMessage(`Thank you for your contribution of $${amount}!`);
    setAmount('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 md:p-16">

      <motion.section className="text-center text-white mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Empower Ideas Through Crowdfunding</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Join us in supporting visionary projects and turning dreams into reality.</p>
      </motion.section>

      <motion.div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg md:max-w-2xl text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Total Raised</h2>
        {Object.keys(currencyRates).map((currency) => (
          <p key={currency} className="text-gray-700 font-medium">{currency}: {(totalRaised * currencyRates[currency]).toFixed(2)}</p>
        ))}
        <p className="text-gray-500 mt-4">Contributors: {contributors.length}</p>
      </motion.div>

      <motion.form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg md:max-w-xl mt-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <label className="block mb-3 text-lg font-medium text-gray-800" htmlFor="amount">Enter your contribution amount (in USD):</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <button type="submit" className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-lg hover:scale-105 transition-transform">Contribute</button>
      </motion.form>

      {message && (<motion.p className="mt-4 text-green-500 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{message}</motion.p>)}

      <motion.div className="mt-8 bg-white p-6 rounded-3xl shadow-2xl w-full max-w-lg md:max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-2xl font-semibold mb-4">Recent Contributors</h3>
        <ul>
          {contributors.slice(-5).map((c) => (
            <li key={c.id} className="text-gray-700">Contributor {c.id}: ${c.amount}</li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
};

export default Crowdfunding;
