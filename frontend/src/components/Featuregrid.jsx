"use client";
import React from "react";
import Particles from "@/components/Particles";

const features = [
  { title: "🚀 Fast Performance", description: "Optimized for speed and efficiency.", glow: "shadow-[0_0_15px_#ff0000]" },
  { title: "🤖 AI-Powered", description: "Leverage AI for smarter workflows.", glow: "shadow-[0_0_15px_#00ff00]" },
  { title: "🔗 Easy Integration", description: "Seamless setup with existing projects.", glow: "shadow-[0_0_15px_#0000ff]" },
  { title: "📱 Responsive Design", description: "Perfect on all devices and screen sizes.", glow: "shadow-[0_0_15px_#ff00ff]" },
  { title: "🎨 Customizable", description: "Modify and adapt to your needs effortlessly.", glow: "shadow-[0_0_15px_#00ffff]" },
  { title: "🔒 Secure & Reliable", description: "Built with top-notch security features.", glow: "shadow-[0_0_15px_#ffff00]" },
  { title: "📊 Real-time Analytics", description: "Monitor performance with real-time insights.", glow: "shadow-[0_0_15px_#ff8800]" },
  { title: "⚡ Lightning Speed", description: "Ultra-fast processing with minimal latency.", glow: "shadow-[0_0_15px_#8800ff]" },
  { title: "🛠️ Developer Friendly", description: "Built with clean and modular code.", glow: "shadow-[0_0_15px_#44ff44]" }
];

const FeatureGrid = () => {
  return (
    <section className="relative top-[-90] py-1 bg-black text-white text-center overflow-hidden">
      {/* Particles Effect */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={50}
          speed={0.3}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Features Section Content */}
      <div className="relative z-10 container mb-20 mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Why Choose <span className="text-violet-400">Front-Fusion?</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 bg-black bg-opacity-40 rounded-xl border border-white/20 backdrop-blur-xl transition-transform duration-300 
              ${feature.glow} hover:scale-105 hover:shadow-xl`}
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
