import React from "react";
import { connect } from "react-redux";
import './index.css';

const Results = ({ result }) => {
  const { score, severity } = result;
  if (!score) return null;
  
  return (
    <div className="results">
      <h1>Result:</h1>
      <p>Score { score }, { severity }</p>
    </div>
  );
}

const mapStateToProps = state => ({ result: state.result });
export default connect(mapStateToProps)(Results);
