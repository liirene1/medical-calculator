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
  if (action.type === "AUTOFILL_WEIGHT") {
    console.log("reducer", action.payload);
    return {
      ...state,
      patientInfo: {
        ...state.patientInfo,
        weight: action.payload
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
