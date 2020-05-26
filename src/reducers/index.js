// import extraInfoData from '../constants/extraInfo.json';
const extraInfoData = {
  "whenToUse" : [
    "Assessing a patient’s renal function",
    "Prescribing a drug that is renally metabolized"
  ],
  "pearlsPitfalls": {
    "title": "From Dan Brown, PharmD, at Palm Beach Atlantic University, the primary author of the functional range of creatinine clearance paper",
    "text": "“The Cockcroft-Gault equation remains the gold standard after almost 40 years, despite inaccuracies that arise from variations in body composition among patients. Those who understand potential sources of error can adjust accordingly.”"
  }
}

const initialState = {
  extraInfo: extraInfoData,
  patientInfo: {},
  result: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === "AUTOFILL_AGE_SEX") {
    return {
      ...state,
      patientInfo: {
        ...state.patientInfo,
        age: action.age,
        sex: action.sex
      }
    };
  }
  if (action.type === "AUTOFILL_WEIGHT") {
    return {
      ...state,
      patientInfo: {
        ...state.patientInfo,
        weight: action.weight
      }
    };
  }
  if (action.type === "AUTOFILL_HEIGHT") {
    console.log(action);
    return {
      ...state,
      patientInfo: {
        ...state.patientInfo,
        height: action.height
      }
    };
  }
  if (action.type === "UPDATE_RESULT") {
    return {
      ...state,
      result: action.result
    };
  }
  return state;
};

export default rootReducer;
