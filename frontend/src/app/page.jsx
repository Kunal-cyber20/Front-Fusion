import React from 'react';
import Aurora from '@/components/Aurora';
import Particles from '@/components/Particles';
import { Bell } from 'lucide-react';
import GradientText from '@/components/GradientText';
import FeatureGrid from '@/components/Featuregrid';
const Home = () => {
  return (
    <div className="relative w-full  min-h-screen overflow-hidden bg-black">
      {/* Menu Bar (Navbar) */}
      <nav className="fixed top-0  left-0 w-full p-1 py-1 z-50  bg-opacity-90">
        <div className="flex justify-between items-center max-w-8xl mx-auto">
          <div className="text-white text-2xl font-bold">
            <img
              src="/wmremove-transformed-fotor-bg-remover-2025031814434.png"
              alt="menubar"
              className="h-28 w-auto object-contain"
            />
          </div>
          <div className="space-x-6 mr-8 mb-5 flex items-center justify-end">
            <a href="https://front-fusion.vercel.app" className="text-white text-xl hover:text-violet-400">Home</a>
            <a href="/about" className="text-white text-xl hover:text-violet-400">About Us</a>
            <a href="/contact" className="text-white text-xl hover:text-violet-400">Contact Us</a>
            <div className="relative group flex items-center">
  <Bell size={22} className="text-white hover:text-violet-400 cursor-pointer" />
  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Notifications
  </span>
</div>

            <div className="flex items-center space-x-2">
              <a href="/login" className="text-white text-xl hover:text-violet-400">Login</a>
              <span className="text-white">/</span>
              <a href="/signup" className="text-white text-xl hover:text-violet-400">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Aurora component */}
      <Aurora
        colorStops={["#4400ff", "#b41d84", "#3adfc3"]}
        blend={3.5}
        amplitude={4.0}
        speed={0.5}
      />

      {/* Particles Background */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={2000}
          particleSpread={40}
          speed={0.2}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Centered Heading */}
      <h1 className="absolute top-[12%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-white">
        »»𝐅𝐫𝐨𝐧𝐭-𝐅𝐮𝐬𝐢𝐨𝐧 𝐀.𝐈««
      </h1>

      {/* GradientText as subheading */}
      <p className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-5xl">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl text-center"
        >
          Frontend Development Made Easy!
        </GradientText>
      </p>

      {/* Prompt button */}
      <div className="absolute bottom-[47%]  left-1/2 transform -translate-x-1/2">
      <button className="shadow-[0px_5px_20px_rgba(96,224,208,0.7)] bg-transparent mb-60 px-10 py-2.5 text-xl text-white rounded-full hover:bg-violet-700 hover:bg-opacity-10 hover:text-black backdrop-blur-lg border border-white">
      Prompt Here ! To Unleash The Power
      </button>
      </div>
      {/* Import file button*/}
      <div className="absolute bottom-[35%] left-[35%] transform -translate-x-1/2">
      <button className="shadow-[0px_5px_20px_rgba(96,224,208,0.7)] bg-transparent mb-60 px-10 py-2.5 text-xl text-white rounded-full hover:bg-violet-700 hover:bg-opacity-10 hover:text-black backdrop-blur-lg border border-white">
      Import your code
      </button>
      </div>
      {/* Export file button*/}
      <div className="absolute bottom-[35%] left-[65%] transform -translate-x-1/2">
      <button className="shadow-[0px_5px_20px_rgba(96,224,208,0.7)] bg-transparent mb-60 px-10 py-2.5 text-xl text-white rounded-full hover:bg-violet-700 hover:bg-opacity-10 hover:text-black backdrop-blur-lg border border-white">
      Export your code
      </button>
      </div>
      <div> {/* Feature Grid Section - Added Here */}
      <div className="mt-32">
        <FeatureGrid />
      </div></div>
    </div>
    

  );
};

export default Home;
