import React from 'react';
import Header from './Header';
import CubeDisplay from './CubeDisplay';
import SolvingSteps from './SolvingSteps';
import TutorialSection from './TutorialSection';
import './MainContainer.css';

/**
 * MainContainer component
 * Serves as the primary layout container for the CubeMaster application
 * Arranges all subcomponents in a cohesive layout
 */
const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      
      <div className="content">
        <h1 className="app-title">CubeMaster: Interactive Rubik's Solver</h1>
        <p className="app-description">
          A step-by-step guide to solving the Rubik's cube with interactive 3D visualization.
          Learn various solving techniques through our tutorials and improve your solving skills.
        </p>
        
        <div className="grid-layout">
          <div className="cube-display-area">
            <h2 className="section-title">Cube Visualization</h2>
            <CubeDisplay />
          </div>
          
          <div className="solving-steps-area">
            <SolvingSteps />
          </div>
          
          <div className="tutorial-area">
            <TutorialSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
