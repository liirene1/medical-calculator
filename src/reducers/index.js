import extraInfoData from 'constants/extraInfo';

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
