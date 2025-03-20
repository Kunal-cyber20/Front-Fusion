import React from 'react';
import Aurora from '@/components/Aurora';  // Assuming Aurora component is already created
import TiltedCard from '@/components/Tiltcard';  // Assuming you already have this component
import Navbar from '@/components/Navbar';

function ContactUs() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
     
      {/* Aurora Background */}
      <Aurora
        colorStops={["#4400ff", "#b41d84", "#3adfc3"]}  // Custom colors for the Aurora effect
        blend={1.5}  // Adjust the blend of the colors
        amplitude={2.0}  // Adjust the intensity of the wave
        speed={0.5}  // Adjust the speed of the animation
        className="absolute top-0 left-0 w-full h-full"  // Position the Aurora component in the background
      />

      {/* Contact Us Section */}
      <div className="relative z-10 max-w-4xl mx-auto p-4 text-white">
        <h1 className="text-4xl sm:text-5xl mt-18 font-bold text-center mb-6">Contact Us</h1>
        
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl">
            Let's start a conversation! How can we help you? 
          </p>
          <p className="text-lg sm:text-xl">
            See our platform in action, give suggestions or report a problem which will help to improve.
          </p>
          
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto p-6 rounded-lg  shadow-[0px_10px_30px_rgba(64,224,208,0.7)] backdrop-blur-lg">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-white mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-white mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="message" className="text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="text-white border border-gray-300 rounded-lg p-2"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
