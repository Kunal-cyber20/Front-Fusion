import React from 'react';

const GradientText = ({ colors, animationSpeed, showBorder, className, children }) => {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "200% 200%",
        color: "transparent",  // Ensure text color is transparent
        backgroundClip: "text",  // Apply gradient to the text itself
        WebkitBackgroundClip: "text",  // Webkit support for Chrome/Safari
        display: "inline-block",
        animation: `gradientAnimation ${animationSpeed}s ease infinite`,
        ...(showBorder && { border: "2px solid white" }),  // Optional border
      }}
    >
      {/* Gradient animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      {children}
    </span>
  );
};

export default GradientText;
