import React from 'react';
import { ExtraInfo } from 'components/ExtraInfo';
import PatientStats from 'components/PatientStats';
import { Result } from 'components/Result';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Creatinine Clearance (Cockcroft-Gault Equation) </h1>
      <h5>Calculates CrCl according to the Cockcroft-Gault equation.</h5>
      <ExtraInfo />
      <PatientStats />
      <Result />
    </div>
  );
}

export default App;
