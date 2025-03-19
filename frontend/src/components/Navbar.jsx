// components/Navbar.js
"use client";
import React, { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top-0 left-0 w-full bg-black bg-opacity-60  z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex text-xl ml-70 space-x-20 items-center">
          <a href="https://front-fusion.vercel.app" className="text-white text-lg hover:text-violet-400 transition-colors">
            Home
          </a>
          <a href="/about" className="text-white text-lg hover:text-violet-400 transition-colors">
            About Us
          </a>
          <a href="/contact" className="text-white text-lg hover:text-violet-400 transition-colors">
            Contact Us
          </a>
          <div className="relative group flex items-center">
            <Bell size={18} className="text-white hover:text-violet-400 cursor-pointer transition-colors" />
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Notifications
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <a href="/login" className="text-white text-lg hover:text-violet-400 transition-colors">
              Login
            </a>
            <span className="text-white">/</span>
            <a href="/signup" className="text-white text-lg hover:text-violet-400 transition-colors">
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white z-50 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed top-14 inset-x-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center space-y-3 py-4">
            <a href="https://front-fusion.vercel.app" className="text-white text-base hover:text-violet-400 transition-colors">
              Home
            </a>
            <a href="/about" className="text-white text-base hover:text-violet-400 transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-white text-base hover:text-violet-400 transition-colors">
              Contact Us
            </a>
            <a href="/login" className="text-white text-base hover:text-violet-400 transition-colors">
              Login
            </a>
            <a href="/signup" className="text-white text-base hover:text-violet-400 transition-colors">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;