import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonTab from "../ButtonTab";
import InputRow from "../InputRow";
import { calculate, determineSeverity } from "../../utils/calculate";
import { getAgeSex, getWeight, getHeight } from "../../actions/patientStats";
import { updateResult } from "../../actions/result";
import './index.css';

export class PatientStats extends Component {
  constructor(props) {
    super(props);

    const { sex, age, weight, height, creatinine } = props.patientInfo;
    this.state = {
      sexSelected: sex || '',
      age: age || '',
      weight: weight || '',
      height: height || '',
      creatinine: creatinine || ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  componentDidMount() {
    // const { getAgeSex, getWeight, getHeight } = this.props;
    this.props.getAgeSex();
    // this.props.getWeight();
    // getHeight();
  }

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
    this.props.updateResult(score, severity);
  }

  render() {
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

        <InputRow
          label="Age"
          value={age}
          handleChange={e => this.handleInputChange("age", e.target.value)}
          units="years"
        />

        <InputRow
          label="Weight"
          value={weight}
          handleChange={e => this.handleInputChange("weight", e.target.value)}
          units="kg"
        />

        <InputRow
          label="Creatinine"
          value={creatinine}
          handleChange={e => this.handleInputChange("creatinine", e.target.value)}
          units="mg/dL"
        />

        <InputRow
          label="Height"
          value={height}
          handleChange={e => this.handleInputChange("height", e.target.value)}
          units="cm"
        />

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

const mapStateToProps = (state) => ({ patientInfo: state.patientInfo });
//const mapDispatchToProps

export default connect(
  mapStateToProps,
  { getAgeSex, getWeight, getHeight, updateResult }
  // mapDispatchToProps
)(PatientStats);
