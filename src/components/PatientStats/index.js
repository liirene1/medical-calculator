import React, { Component } from "react";
import { connect } from "react-redux";
import './index.css';

export class PatientStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selected: 0
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  //componentWillMount(){ //grab patient info from API }

  render() {
    // const { extraInfo } = this.props;
    // const { selected } = this.state;
    return (
      <div className="patient-stats">
        <div className="input-row">
          <div> Sex </div>
          <div className="btn-row">
            <div className="btn">Female</div>
            <div className="btn">Male</div>
          </div>
        </div>
        <div className="input-row">
          <div> Age </div>
          <div className="input-group">
            <input />
            <div className="units"> years </div>
          </div>
        </div>
        <div className="input-row">
          <div> Weight </div>
          <div className="input-group">
            <input />
            <div className="units"> kg </div>
          </div>
        </div>
        <div className="input-row">
          <div> Creatinine </div>
          <div className="input-group">
            <input />
            <div className="units"> mg/dL </div>
          </div>
        </div>
        <div className="input-row">
          <div> Height </div>
          <div className="input-group">
            <input />
            <div className="units"> cm </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ extraInfo: state.extraInfo });
//const mapDispatchToProps

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(PatientStats);
