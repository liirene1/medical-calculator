import urls from "../constants/urls";

function calculateAge(birthday) {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function getAgeSex() {
  return function(dispatch) {
    return fetch(urls.AGE_SEX_URL)
    .then(response => response.text())
    .then(text => {
      const xmlResponse = new DOMParser().parseFromString(text, "text/xml");
      const genderNode = xmlResponse.getElementsByTagName("gender")[0]
      let sex;
      if (genderNode) {
        sex = genderNode.getAttribute("value");
      }
      const birthDateNode = xmlResponse.getElementsByTagName("birthDate")[0]
      let age;
      if (birthDateNode) {
        const birthDate = birthDateNode.getAttribute("value");
        const birthDateObject = new Date(birthDate);
        age = calculateAge(birthDateObject)
      }
      dispatch({ type: "AUTOFILL_AGE_SEX", age, sex });
    });
  }
}

export function getWeight() {
  return function(dispatch) {
    return fetch(urls.WEIGHT_URL)
      .then(response => { console.log("weight", response)})
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
