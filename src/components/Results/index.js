import React from "react";
import { connect } from "react-redux";
import './index.css';

const Results = ({ score, severity }) => (
  <div className="results">
    <h1>Result:</h1>
    <p>Score { score }, { severity }</p>
  </div>
);

const mapStateToProps = state => {
  return { results: state.results };
};

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
