"use client";
import React from "react";
import Aurora from "@/components/Aurora";
import Particles from "@/components/Particles";
import FeatureGrid from "@/components/Featuregrid";
import Promptbar from "@/components/Promptbar";
import GradientText from "@/components/Gradienttext";
import Navbar from "@/components/Navbar"; // Import the Navbar 

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
     

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
      <div className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 mt-7">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
          »»𝐅𝐫𝐨𝐧𝐭-𝐅𝐮𝐬𝐢𝐨𝐧 𝐀.𝐈««
        </h1>

        <div className="mt-25 mb-18 text-xl md:text-5xl text-white/90">
        <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Frontend Development Made Easy !
</GradientText>
        </div>
        <div className="mb-50 mt-25 flex flex-col md:flex-row gap-4 md:gap-8">
          <Promptbar />
        </div>
      </div>

      {/* Feature Grid Section */}
      <FeatureGrid />
    </div>
  );
};

export default Home;