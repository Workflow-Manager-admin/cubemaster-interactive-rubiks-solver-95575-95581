import React from 'react';
import { CubeProvider } from './contexts/CubeContext';
import MainContainer from './components/MainContainer';
import './App.css';

/**
 * App component
 * Wraps the MainContainer with the CubeContext provider
 * to ensure cube state management is available throughout the app
 */
function App() {
  return (
    <div className="app">
      <CubeProvider>
        <MainContainer />
      </CubeProvider>
    </div>
  );
}

export default App;