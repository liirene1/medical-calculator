import React from 'react';
import ExtraInfo from './components/ExtraInfo';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Creatinine Clearance (Cockcroft-Gault Equation) </h1>
      <h5>Calculates CrCl according to the Cockcroft-Gault equation.</h5>
      <ExtraInfo />
    </div>
  );
}

export default App;
