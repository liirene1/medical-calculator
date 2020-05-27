import React from "react";
import { useSelector } from "react-redux";
import { resultLabels } from "constants/labels";
import './index.css';

export const Result = () => {
  const { result } = useSelector(state => ({ result: state.result }));
  const { score, severity } = result;
  if (!result || !severity) return null;

  return (
    <div className="result">
      <h1>{resultLabels.RESULT}:</h1>
      <p>{resultLabels.SCORE}: { score }, {resultLabels.SEVERITY}: { severity }</p>
    </div>
  );
}
