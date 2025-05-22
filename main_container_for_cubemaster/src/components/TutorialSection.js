import React, { useState } from 'react';
import './TutorialSection.css';

/**
 * TutorialSection component
 * Provides interactive tutorials for learning Rubik's Cube solving techniques
 */
const TutorialSection = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(0);
  
  // Placeholder tutorials data
  const tutorials = [
    {
      id: 1,
      title: "Beginner's Method",
      description: "Learn the layer-by-layer method perfect for beginners.",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "CFOP Method",
      description: "The Fridrich method used by speedcubers worldwide.",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "Finger Tricks",
      description: "Essential finger movements to improve your solving speed.",
      difficulty: "All Levels",
    },
  ];

  return (
    <div className="tutorial-container">
      <h2>Interactive Tutorials</h2>
      
      <div className="tutorials-list">
        {tutorials.map((tutorial, index) => (
          <div 
            key={tutorial.id} 
            className={`tutorial-item ${selectedTutorial === index ? 'selected' : ''}`}
            onClick={() => setSelectedTutorial(index)}
          >
            <h3>{tutorial.title}</h3>
            <div className="tutorial-meta">
              <span className="difficulty">Difficulty: {tutorial.difficulty}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="tutorial-content">
        <h3>{tutorials[selectedTutorial].title}</h3>
        <p>{tutorials[selectedTutorial].description}</p>
        <div className="tutorial-placeholder">
          <p>Interactive tutorial content will appear here</p>
        </div>
        <button className="btn">Start Tutorial</button>
      </div>
    </div>
  );
};

export default TutorialSection;
