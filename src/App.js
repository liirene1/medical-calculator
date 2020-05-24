import React from 'react';
import ExtraInfo from './components/ExtraInfo';
import PatientStats from './components/PatientStats';
import Results from './components/Results';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Creatinine Clearance (Cockcroft-Gault Equation) </h1>
      <h5>Calculates CrCl according to the Cockcroft-Gault equation.</h5>
      <ExtraInfo />
      <PatientStats />
      <Results />
    </div>
  );
}

export default App;
