import urls from "constants/urls";
import { calculateAge, parseXML } from "utils/xml";

export function getAgeSex() {
  return function(dispatch) {
    return fetch(urls.AGE_SEX_URL)
    .then(response => response.text())
    .then(text => {
      let sex = parseXML(text, "gender");
      let birthDate = parseXML(text, "birthDate");
      let age;
      if (birthDate) {
        const birthDateObject = new Date(birthDate);
        age = calculateAge(birthDateObject)
      }
      if (age || sex) {
        dispatch({ type: "AUTOFILL_AGE_SEX", age, sex });
      }
    });
  }
}

export function getWeight() {
  return function(dispatch) {
    return fetch(urls.WEIGHT_URL)
      .then(response => response.text())
      .then(text => {
        let weight = parseXML(text, "value");
        if (weight) {
          dispatch({ type: "AUTOFILL_WEIGHT", weight });
        }
      });
  };
}

export function getHeight() {
  return function(dispatch) {
    return fetch(urls.HEIGHT_URL)
    .then(response => response.text())
    .then(text => {
      let height = parseXML(text, "value");
      if (height) {
        dispatch({ type: "AUTOFILL_HEIGHT", height });
      }
    });
  };
}
