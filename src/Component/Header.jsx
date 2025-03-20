import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const signnavigate = () => {
    navigate("/Sign")
  }
  

  return (
    <header className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-6 shadow-xl text-white flex justify-between items-center px-6 md:px-12 relative rounded-b-3xl">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition-transform">Crowdfund</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="/Details" className="hover:text-yellow-300 transition">Home</a>
        <a href="/About" className="hover:text-yellow-300 transition">About</a>
        <a href="/Gpg" className="hover:text-yellow-300 transition">Funding</a>
        <a href="/Sign" className="hover:text-yellow-300 transition">Contact</a>
      </nav>

      {/* Login Button */}
  
      <button className="hidden md:block bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-bold hover:bg-yellow-500 transition" onClick={(signnavigate) => navigate('/Sign')}>
        Login
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-6 px-6 md:hidden flex flex-col space-y-6 rounded-b-3xl">
          <a href="/Details" className="text-gray-800 text-lg hover:text-purple-500">Home</a>
          <a href="/About" className="text-gray-800 text-lg hover:text-purple-500">About</a>
          <a href="/Gpg" className="text-gray-800 text-lg hover:text-purple-500">Funding</a>
          <a href="/Sign" className="text-gray-800 text-lg hover:text-purple-500">Contact</a>
        </div>
      )}
    </header>
  );
}
