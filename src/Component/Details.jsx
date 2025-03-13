import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Crowdfunding = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [totalRaised, setTotalRaised] = useState(0);
  const [contributors, setContributors] = useState([]);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-indigo-500 p-4 md:p-8">
      

      {/* Introduction Section */}
      <motion.section
        className="text-center text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Crowdfunding Platform</h1>
        <p className="text-lg max-w-3xl mx-auto">Join us in supporting innovative projects and ideas. Every contribution helps bring dreams to reality.</p>
      </motion.section>
      
      {/* Crowdfunding Campaign Section */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Total Raised: ${totalRaised.toFixed(2)}</h2>
        <p className="text-gray-600">Contributors: {contributors.length}</p>
      </motion.div>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <label className="block mb-3 text-lg font-medium text-gray-700" htmlFor="amount">
          Enter your contribution amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <button
          type="submit"
          className="w-full mt-4 bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-all"
        >
          Contribute
        </button>
      </motion.form>
      {message && (
        <motion.p
          className="mt-4 text-green-200 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {message}
        </motion.p>
      )}
      
      {/* About Section */}
      <motion.section
        className="text-center text-white mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">We are dedicated to providing a platform that helps fundraisers connect with supporters worldwide and make their dreams come true.</p>
      </motion.section>
      
      {/* Contact Section */}
      <motion.section
        className="text-center text-white mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">Have any questions? Reach out to us at <a href="mailto:72823tuec237@skct.edu.in" className="underline">72823tuec237@skct.edu.in</a></p>
      </motion.section>

      
    </div>
  );
};

export default Crowdfunding;