import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonTab from "../ButtonTab";
import { calculate, determineSeverity } from "../../utils/calculate";
import './index.css';

export class PatientStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexSelected: undefined,
      age: undefined,
      weight: undefined,
      height: undefined,
      creatinine: undefined
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  //componentWillMount(){ //grab patient info from API }

  handleClick(tab) {
    this.setState({ sexSelected: tab });
  }

  handleInputChange(field, newValue) {
    // console.log("handleInputChange", field, newValue);
    // const validNumber = new RegExp(/^\d*\.?\d*$/);
    // console.log(newValue, validNumber.test(newValue));
    // if (field === "sexSelected" || (field !== "sexSelected" && validNumber.test(newValue))) {
      this.setState({ [field]: newValue });
    // }
  }

  handleCalculation() {
    const { sexSelected, age, weight, height, creatinine } = this.state;
    const score = calculate(sexSelected, age, weight, height, creatinine);
    const severity = determineSeverity(score);
    console.log(severity);
    //dispatch (score, severity) to state
  }

  render() {
    // const { extraInfo } = this.props;
    const { sexSelected, age, weight, height, creatinine } = this.state;
    const isDisabled = !sexSelected || !age || !weight || !creatinine || !height;
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
              <input
                type="number"
                value={age}
                onChange={e => this.handleInputChange("age", e.target.value)}
              />
              <div className="units"> years </div>
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="label"> Weight </div>
          <div className="input-wrapper">
            <div className="input-group">
              <input
                type="number"
                value={weight}
                onChange={e => this.handleInputChange("weight", e.target.value)}
              />
              <div className="units"> kg </div>
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="label"> Creatinine </div>
          <div className="input-wrapper">
            <div className="input-group">
              <input
                type="number"
                value={creatinine}
                onChange={e => this.handleInputChange("creatinine", e.target.value)}
              />
              <div className="units"> mg/dL </div>
            </div>
          </div>
        </div>

        <div className="input-row">
          <div className="label"> Height </div>
          <div className="input-wrapper">
            <div className="input-group">
              <input
                type="number"
                value={height}
                onChange={e => this.handleInputChange("height", e.target.value)}
              />
              <div className="units"> cm </div>
            </div>
          </div>
        </div>

        <div className="btn-row">
          <div
            className={`calculate-btn ${isDisabled ? 'disabled' : ''}`}
            onClick={() => this.handleCalculation()}
          >
            Calculate
          </div>
        </div>
      </div>
    );
  }
}

//const mapStateToProps = (state) => ({ extraInfo: state.extraInfo });
//const mapDispatchToProps

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(PatientStats);
