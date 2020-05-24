import React from "react";
import { connect } from "react-redux";

const Results = ({ score, severity }) => (
  <div>
    Results: Score { score }, { severity }
  </div>
);

const mapStateToProps = state => {
  return { results: state.results };
};

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
