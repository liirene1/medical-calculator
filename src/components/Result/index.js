import React from "react";
import { useSelector } from "react-redux";
import './index.css';

export const Result = () => {
  const { result } = useSelector(state => ({ result: state.result }));
  const { score, severity } = result;
  if (!result || !severity) return null;

  return (
    <div className="result">
      <h1>Result:</h1>
      <p>Score: { score }, Severity: { severity }</p>
    </div>
  );
}
