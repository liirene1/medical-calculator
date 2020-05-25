import urls from "../constants/urls";

export function getAgeSex() {
  return function(dispatch) {
    return fetch(urls.AGE_SEX_URL)
    .then(response => {console.log("age", response)}) //response.json())
    // .then(json => dispatch({ type: "AUTOFILL_AGE_SEX", payload: json }));
  }
}

export function getWeight() {
  return function(dispatch) {
    return fetch(urls.WEIGHT_URL)
      .then(response => { console.log("weight", response)})//response.json())
      // .then(json => {
        // console.log("weight json", json);
      //   dispatch({ type: "AUTOFILL_WEIGHT", payload: json });
      // });
  };
}

export function getHeight() {
  return function(dispatch) {
    return fetch(urls.HEIGHT_URL)
    .then(response => response.json())
    .then(json => dispatch({ type: "AUTOFILL_HEIGHT", payload: json }));
  }
}
