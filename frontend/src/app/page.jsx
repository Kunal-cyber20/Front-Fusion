"use client";

import React, { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import Aurora from "@/components/Aurora";
import Particles from "@/components/Particles";
import FeatureGrid from "@/components/Featuregrid";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Navbar */}
      <header className="top-0 left-0 w-full bg-black/90 backdrop-blur-sm sticky z-50 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="https://front-fusion.vercel.app/" className="text-white text-lg hover:text-violet-400 transition-colors">Home</a>
            <a href="/about" className="text-white text-lg hover:text-violet-400 transition-colors">About Us</a>
            <a href="/contact" className="text-white text-lg hover:text-violet-400 transition-colors">Contact Us</a>
            <div className="relative group flex items-center">
              <Bell size={18} className="text-white hover:text-violet-400 cursor-pointer transition-colors" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Notifications
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <a href="/login" className="text-white text-lg hover:text-violet-400 transition-colors">Login</a>
              <span className="text-white">/</span>
              <a href="/signup" className="text-white text-lg hover:text-violet-400 transition-colors">Sign Up</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-white z-50 transition-transform transform"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div className={`md:hidden fixed top-14 inset-x-0 bg-black/95 backdrop-blur-lg z-40 transform transition-all duration-300 ease-in-out origin-top ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
            <div className="flex flex-col items-center space-y-4 py-5">
              <a href="https://front-fusion.vercel.app" className="text-white text-base hover:text-violet-400 transition-colors">Home</a>
              <a href="/about" className="text-white text-base hover:text-violet-400 transition-colors">About Us</a>
              <a href="/contact" className="text-white text-base hover:text-violet-400 transition-colors">Contact Us</a>
              <a href="/login" className="text-white text-base hover:text-violet-400 transition-colors">Login</a>
              <a href="/signup" className="text-white text-base hover:text-violet-400 transition-colors">Sign Up</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Background Effects */}
      <Aurora colorStops={["#4400ff", "#b41d84", "#3adfc3"]} blend={3.5} amplitude={4.0} speed={0.5} />
      <div className="absolute top-0 left-0 w-full h-screen">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={2000}
          particleSpread={40}
          speed={0.2}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col mb-10 justify-center top-[-80] items-center text-center px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
          »»𝐅𝐫𝐨𝐧𝐭-𝐅𝐮𝐬𝐢𝐨𝐧 𝐀.𝐈««
        </h1>
        <p className="text-xl md:text-4xl text-white/90 mt-30 mb-40">
          Frontend Development Made Easy!
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <button className="shadow-lg bg-white/5 px-8 py-3 text-lg text-white rounded-full hover:bg-white/10 backdrop-blur-lg border border-white/20 transition-all hover:scale-105">
            Prompt Here! To Unleash The Power
          </button>
          <button className="shadow-lg bg-white/5 px-8 py-3 text-lg text-white rounded-full hover:bg-white/10 backdrop-blur-lg border border-white/20 transition-all hover:scale-105">
            Import your code
          </button>
          <button className="shadow-lg bg-white/5 px-8 py-3 text-lg text-white rounded-full hover:bg-white/10 backdrop-blur-lg border border-white/20 transition-all hover:scale-105">
            Export your code
          </button>
        </div>
      </section>

      {/* Feature Grid Section */}
      <FeatureGrid />
    </div>
  );
};

export default Home;
