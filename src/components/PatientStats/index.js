import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import ButtonTab from "components/ButtonTab";
import InputRow from "components/InputRow";
import { patientStatsLabels } from "constants/labels";
import { calculate, determineSeverity } from "utils/calculate";
import { getAgeSex, getWeight, getHeight } from "actions/patientStats";
import { updateResult } from "actions/result";
import './index.css';

export class PatientStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sex: undefined,
      age: undefined,
      weight: undefined,
      height: undefined,
      creatinine: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  componentDidMount() {
    const { getAgeSex, getWeight, getHeight } = this.props;
    getAgeSex();
    getWeight();
    getHeight();
  }

  componentDidUpdate(prevProps) {
    const { patientInfo } = this.props;
    if(patientInfo !== prevProps.patientInfo) {
      Object.keys(patientInfo).map(key => this.setState({ [key]: patientInfo[key] }));
    }
  }

  handleChange(field, newValue) {
    this.setState({ [field]: newValue });
  }

  handleCalculation() {
    const { sex, age, weight, height, creatinine } = this.state;
    const score = calculate({sex, age, weight, height, creatinine});
    const severity = determineSeverity(score);
    this.props.updateResult(score, severity);
  }

  render() {
    const { sex, age, weight, height, creatinine } = this.state;
    const isDisabled = !sex || !age || !weight || !creatinine || !height;
    return (
      <div className="patient-stats">
        <div className="input-row">
          <div className="label"> {patientStatsLabels.SEX} </div>
          <div className="input-wrapper">
            <div className="btn-row">
              <ButtonTab
                label="Female"
                isSelected={sex === "female"}
                handleClick={() => this.handleChange("sex", "female")}
              />
              <ButtonTab
                label="Male"
                isSelected={sex === "male"}
                handleClick={() => this.handleChange("sex", "male")}
              />
            </div>
          </div>
        </div>

        <InputRow
          label={patientStatsLabels.AGE}
          value={age}
          handleChange={e => this.handleChange("age", e.target.value)}
          units="years"
        />

        <InputRow
          label={patientStatsLabels.WEIGHT}
          value={weight}
          handleChange={e => this.handleChange("weight", e.target.value)}
          units="kg"
        />

        <InputRow
          label={patientStatsLabels.CREATININE}
          value={creatinine}
          handleChange={e => this.handleChange("creatinine", e.target.value)}
          units="mg/dL"
        />

        <InputRow
          label={patientStatsLabels.HEIGHT}
          value={height}
          handleChange={e => this.handleChange("height", e.target.value)}
          units="cm"
        />

        <div className="btn-row">
          <div
            className={`calculate-btn ${isDisabled ? 'disabled' : ''}`}
            onClick={() => this.handleCalculation()}
          >
            {patientStatsLabels.CALCULATE}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ patientInfo: state.patientInfo });
const mapDispatchToProps = dispatch => (
  bindActionCreators({ getAgeSex, getWeight, getHeight, updateResult }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientStats);
