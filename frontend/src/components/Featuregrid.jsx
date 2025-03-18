'use client';
import React from "react";
import Particles from "@/components/Particles";

const features = [
  { title: "🚀 Fast Performance", description: "Optimized for speed and efficiency.", glow: "shadow-[0_0_13px_#ff0000]" },
  { title: "🤖 AI-Powered", description: "Leverage AI for smarter workflows.", glow: "shadow-[0_0_13px_#00ff00]" },
  { title: "🔗 Easy Integration", description: "Seamless setup with existing projects.", glow: "shadow-[0_0_13px_#0000ff]" },
  { title: "📱 Responsive Design", description: "Perfect on all devices and screen sizes.", glow: "shadow-[0_0_13px_#ff00ff]" },
  { title: "🎨 Customizable", description: "Modify and adapt to your needs effortlessly.", glow: "shadow-[0_0_13px_#00ffff]" },
  { title: "🔒 Secure & Reliable", description: "Built with top-notch security features.", glow: "shadow-[0_0_13px_#ffff00]" },
  { title: "📊 Real-time Analytics", description: "Monitor performance with real-time insights.", glow: "shadow-[0_0_13px_#ff8800]" },
  { title: "⚡ Lightning Speed", description: "Ultra-fast processing with minimal latency.", glow: "shadow-[0_0_13px_#8800ff]" },
  { title: "🛠️ Developer Friendly", description: "Built with clean and modular code.", glow: "shadow-[0_0_13px_#44ff44]" }
];

const FeatureGrid = () => {
  return (
    <section className="relative py-16 bg-black text-white text-center overflow-hidden">
      
      {/* Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
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
      <div className="relative z-10">
        <h2 className="text-5xl font-bold mb-12">🚀 Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 bg-black bg-opacity-40 rounded-lg backdrop-blur-xl transition-transform duration-300 border border-opacity-30 
              ${feature.glow} hover:scale-105 hover:border-opacity-100`}
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
