import extraInfoData from 'constants/extraInfo';
import * as actionTypes from 'constants/actionTypes';

const initialState = {
  extraInfo: extraInfoData,
  patientInfo: {},
  result: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.AUTOFILL_AGE_SEX) {
    return {
      ...state,
      patientInfo: {
        ...state.patientInfo,
        age: action.age,
        sex: action.sex
      }
    };
  }
  if (action.type === actionTypes.AUTOFILL_WEIGHT) {
    return {
      ...state,
      patientInfo: {
        ...state.patientInfo,
        weight: action.weight
      }
    };
  }
  if (action.type === actionTypes.AUTOFILL_HEIGHT) {
    return {
      ...state,
      patientInfo: {
        ...state.patientInfo,
        height: action.height
      }
    };
  }
  if (action.type === actionTypes.UPDATE_RESULT) {
    return {
      ...state,
      result: action.result
    };
  }

  return state;
};

export default rootReducer;
