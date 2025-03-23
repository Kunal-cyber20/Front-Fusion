"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TerminalSection = () => {
  const [text, setText] = useState("");
  const commands = [
    "🔄 Booting up Front-Flow A.I...",
    "🚀 Connecting to server cloud...",
    "📦 Loading Tailwind CSS & React Components...",
    "🧠 AI Engine: Analyzing project structure...",
    "🎨 Generating responsive UI layouts...",
    "⚡ Optimizing code efficiency & performance...",
    "📂 Auto-importing necessary dependencies...",
    "🛠️ Building modular components for reusability...",
    "🖌️ Applying custom themes & dark mode...",
    "🔗 Ensuring seamless API integration...",
    "🔍 Running accessibility & SEO checks...",
    "💾 Compressing assets for faster load times...",
    "🔒 Implementing security enhancements...",
    "📊 Real-time analytics dashboard: Activated...",
    "📡 Syncing live data updates...",
    "🖥️ Deploying optimized UI to production...",
    "✅ Deployment Successful! 🚀 Your site is now live!",
    "🎯 Monitoring system performance...",
    "🔔 Notifications enabled for future updates...",
    "✨ AI is now on standby, ready for new tasks...",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setText((prev) => prev + "\n" + commands[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <FullScreenSection>
        
      {/* Terminal UI */}
      <div className="terminal-wrapper">
        <div className="purple-line" />
        <div className="terminal">
          <div className="terminal-header">
            <div className="buttons">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            <p>AI Console</p>
          </div>

          <div className="terminal-body">
            <pre>{text}</pre>
            <span className="blinking-cursor">█</span>
          </div>
        </div>
      </div>
    </FullScreenSection>
  );
};

// Styled Components
const FullScreenSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #240046 0%, #5a189a 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
  flex-direction: column; /* ✅ Ensures the turquoise line is properly positioned */

  /* ✅ Turquoise Line - Separates from Upper Section */
  .turquoise-line {
    width: 100%;
    height: 4px;
    background: #40E0D0;
    box-shadow: 0 0 10px #40E0D0;
    margin-bottom: 20px; /* ✅ Creates spacing between the line and the terminal */
  }

  /* Terminal Wrapper */
  .terminal-wrapper {
    width: 90%;
    max-width: 900px;
    background: rgba(168, 85, 247, 0.2);
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.9);
    position: relative;
    z-index: 2;
  }

  /* Purple Line at the Top */
  .purple-line {
    width: 100%;
    height: 5px;
    background: #a855f7;
    border-radius: 10px 10px 0 0;
  }

  /* Terminal Box */
  .terminal {
    width: 100%;
    min-height: 80vh;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Terminal Header */
  .terminal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background: #222;
    color: white;
  }

  .buttons {
    display: flex;
    gap: 5px;
  }

  .buttons span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }

  .red { background: #ff5f56; }
  .yellow { background: #ffbd2e; }
  .green { background: #27c93f; }

  /* Terminal Body */
  .terminal-body {
    flex-grow: 1;
    padding: 15px;
    white-space: pre-wrap;
    overflow-y: auto;
    font-size: 1rem;
    color: #00ff00;
    font-family: "Courier New", monospace;
  }

  /* Blinking Cursor */
  .blinking-cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* ✅ Responsive Design */
  @media (max-width: 1024px) {
    /* Tablet */
    .terminal-wrapper {
      width: 95%;
      max-width: 800px;
    }
    .terminal {
      min-height: 70vh;
    }
    .terminal-body {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    /* Mobile */
    .terminal-wrapper {
      width: 98%;
      max-width: 600px;
      padding: 10px;
    }
    .terminal {
      min-height: 60vh;
    }
    .terminal-body {
      font-size: 0.85rem;
      padding: 10px;
    }
    .purple-line {
      height: 4px;
    }
  }

  @media (max-width: 480px) {
    /* Small Mobile */
    .terminal-wrapper {
      width: 98%;
      max-width: 90%;
      padding: 8px;
    }
    .terminal {
      min-height: 50vh;
    }
    .terminal-header {
      padding: 8px;
    }
    .terminal-body {
      font-size: 0.75rem;
      padding: 8px;
    }
    .purple-line {
      height: 3px;
    }
  }
`;

export default TerminalSection;
