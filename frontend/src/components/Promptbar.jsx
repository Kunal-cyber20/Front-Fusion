'use client'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Input = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders after mounting to avoid the flash
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing until the component is mounted
  }

  return (
    <StyledWrapper>
      <div className="messageBox">
        <div className="fileUploadWrapper">
          <label htmlFor="file">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
              <circle strokeWidth={20} stroke="#6c6c6c" fill="none" r="158.5" cy="168.5" cx="168.5" />
              <path strokeLinecap="round" strokeWidth={25} stroke="#6c6c6c" d="M167.759 79V259" />
              <path strokeLinecap="round" strokeWidth={25} stroke="#6c6c6c" d="M79 167.138H259" />
            </svg>
            <span className="tooltip">Upload your files and more</span>
          </label>
          <input type="file" id="file" name="file" />
        </div>
        <input required placeholder="Type your prompt here..." type="text" id="messageInput" />
        <button id="sendButton">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
            <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" />
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .messageBox {
    width: 90%; /* Responsive width */
    max-width: 600px; /* Maximum width for larger screens */
    height: 50px; /* Fixed height */
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align content to the left */
    background-color: rgb(14, 13, 13);
    padding: 0 120px;
    border-radius: 30px;
    border: 2px solid rgb(72, 236, 195);
    margin: 0; /* Remove margin: 0 auto to stop centering */
  }

  @media (max-width: 768px) {
    .messageBox {
      height: 45px; /* Slightly smaller height for tablets */
      padding: 0 10px; /* Reduced padding */
    }
  }

  @media (max-width: 480px) {
    .messageBox {
      height: 40px; /* Smaller height for mobile */
      padding: 0 8px; /* Further reduced padding */
    }
  }

  .messageBox:focus-within {
    border: 2px solid rgb(216, 41, 41);
  }

  .fileUploadWrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  #file {
    display: none;
  }

  .fileUploadWrapper label {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .fileUploadWrapper label svg {
    height: 18px; /* Default icon size */
  }

  @media (max-width: 768px) {
    .fileUploadWrapper label svg {
      height: 16px; /* Smaller icon for tablets */
    }
  }

  @media (max-width: 480px) {
    .fileUploadWrapper label svg {
      height: 14px; /* Smaller icon for mobile */
    }
  }

  .fileUploadWrapper label svg path,
  .fileUploadWrapper label svg circle {
    transition: all 0.3s;
  }

  .fileUploadWrapper label:hover svg path {
    stroke: #fff;
  }

  .fileUploadWrapper label:hover svg circle {
    stroke: #fff;
    fill: #3c3c3c;
  }

  .fileUploadWrapper label:hover .tooltip {
    display: block;
    opacity: 1;
  }

  .tooltip {
    position: absolute;
    top: -40px;
    display: none;
    opacity: 0;
    color: white;
    font-size: 10px;
    text-wrap: nowrap;
    background-color: #000;
    padding: 6px 10px;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.596);
    transition: all 0.3s;
  }

  #messageInput {
    width: 100%; /* Full width of the container */
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    padding-left: 10px;
    color: white;
    font-size: 14px; /* Default font size */
  }

  @media (max-width: 768px) {
    #messageInput {
      font-size: 13px; /* Smaller font size for tablets */
    }
  }

  @media (max-width: 480px) {
    #messageInput {
      font-size: 12px; /* Smaller font size for mobile */
    }
  }

  #messageInput:focus ~ #sendButton svg path,
  #messageInput:valid ~ #sendButton svg path {
    fill: #3c3c3c;
    stroke: white;
  }

  #sendButton {
    width: fit-content;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
  }

  #sendButton svg {
    height: 18px; /* Default icon size */
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    #sendButton svg {
      height: 16px; /* Smaller icon for tablets */
    }
  }

  @media (max-width: 480px) {
    #sendButton svg {
      height: 14px; /* Smaller icon for mobile */
    }
  }

  #sendButton svg path {
    transition: all 0.3s;
  }

  #sendButton:hover svg path {
    fill: #3c3c3c;
    stroke: white;
  }
`;

export default Input;