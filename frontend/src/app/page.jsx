import React from 'react';
import Aurora from '@/components/Aurora';
import Particles from '@/components/Particles';
import ShinyText from '@/components/Shinytxt';
import GradientText from '@/components/GradientText';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Menu Bar (Navbar) */}
      <nav className="fixed top-0 left-0 w-full p-4 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-white text-2xl font-bold">
            <img
              src="/wmremove-transformed-fotor-bg-remover-2025031814434.png"
              alt="menubar"
              className="h-28 w-auto object-contain" // Adjust height and add object-contain
            />
          </div>
          <div className="space-x-8 mb-15">
            <a href="http://localhost:3000/" className="text-white text-lg hover:text-blue-400">Home</a>
            <a href="/about" className="text-white text-lg hover:text-blue-400">About Us</a>
            <a href="/contact" className="text-white text-lg hover:text-blue-400">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Aurora component */}
      <Aurora
        colorStops={["#4400ff", "#b41d84", "#3adfc3"]}
        blend={0.8}
        amplitude={3.0}
        speed={0.5}
      />

      {/* Particles Background */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={40}
          speed={0.2}
          particleBaseSize={90}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Centered Heading */}
      <h1 className="absolute top-1/4 left-1/2 mb-3 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-white">
      »»𝐅𝐫𝐨𝐧𝐭-𝐅𝐮𝐬𝐢𝐨𝐧 𝐀.𝐈««
</h1>


      {/* GradientText as subheading */}
      <p className="absolute top-3/7 left-1/2 transform -translate-x-1/2 text-3xl">
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
      <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2">
  <button className="shadow-[0px_10px_30px_rgba(96,224,208,0.7)] bg-transparent px-10 py-2.5 text-xl text-black rounded-full hover:bg-violet-700 hover:bg-opacity-30 backdrop-blur-lg">
    <ShinyText text="Prompt Here ! To Unleash The Power" disabled={false} speed={3} className='custom-class' />
  </button>
</div>


      {/* Login/Signup section */}
      <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 text-center">
        <a
          href="/login"
          className="px-9 py-2 text-sm bg-violet-500 text-white hover:bg-blue-400 hover:text-blue-200 mb-4 rounded-lg"
        >
          Login
        </a>
        
        <h1 className="text-white mb-1">or</h1>

        <a
          href="/signup"
          className="px-8 py-2 text-sm bg-violet-500 hover:bg-blue-400 text-white hover:text-blue-200 rounded-lg"
        >
          Signup
        </a>
      </div>
    </div>
  );
};

export default Home;
