import React, { useState } from 'react';
import './SolvingSteps.css';

/**
 * SolvingSteps component
 * Displays step-by-step instructions for solving the Rubik's Cube
 */
const SolvingSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  // Placeholder steps data - will be replaced with actual algorithm steps
  const steps = [
    {
      id: 1,
      title: "Solve the white cross",
      description: "Start by solving the white cross on the bottom face of the cube.",
      imageUrl: null,
    },
    {
      id: 2,
      title: "Solve the white corners",
      description: "Position and orient the white corner pieces correctly.",
      imageUrl: null,
    },
    {
      id: 3,
      title: "Solve the middle layer",
      description: "Complete the middle layer using edge piece algorithms.",
      imageUrl: null,
    },
  ];

  return (
    <div className="solving-steps-container">
      <h2>Solving Steps</h2>
      
      <div className="steps-navigation">
        <button 
          className="step-btn" 
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
        >
          Previous
        </button>
        <span className="step-indicator">{currentStep + 1} / {steps.length}</span>
        <button 
          className="step-btn" 
          disabled={currentStep === steps.length - 1}
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
        >
          Next
        </button>
      </div>
      
      <div className="step-content">
        <h3>{steps[currentStep].title}</h3>
        <p>{steps[currentStep].description}</p>
        {steps[currentStep].imageUrl && (
          <div className="step-image-placeholder">
            <p>Step visualization will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolvingSteps;
