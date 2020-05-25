import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonTab from "../ButtonTab";
import './index.css';

export class PatientStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexSelected: null,
      age: null,
      weight: null,
      height: null,
      creatinine: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    this.setState({ sexSelected: tab });
  }

  //componentWillMount(){ //grab patient info from API }

  render() {
    // const { extraInfo } = this.props;
    const { sexSelected } = this.state;
    return (
      <div className="patient-stats">
        <div className="input-row">
          <div className="label"> Sex </div>
          <div className="input-wrapper">
            <div className="btn-row">
              <ButtonTab
                label="Female"
                isSelected={sexSelected === "F"}
                handleClick={() => this.handleClick("F")}
              />
              <ButtonTab
                label="Male"
                isSelected={sexSelected === "M"}
                handleClick={() => this.handleClick("M")}
              />
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="label"> Age </div>
          <div className="input-wrapper">
            <div className="input-group">
              <input type="number"/>
              <div className="units"> years </div>
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="label"> Weight </div>
          <div className="input-wrapper">
            <div className="input-group">
              <input type="number"/>
              <div className="units"> kg </div>
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="label"> Creatinine </div>
          <div className="input-wrapper">
            <div className="input-group">
              <input type="number"/>
              <div className="units"> mg/dL </div>
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="label"> Height </div>
          <div className="input-wrapper">
            <div className="input-group">
              <input type="number"/>
              <div className="units"> cm </div>
            </div>
          </div>
        </div>

        <div className="calculate-btn">Calculate</div>
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
