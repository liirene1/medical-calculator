import React from "react";
import './index.css';

const restrictInput = (e, label) => {
  let checkIfRestrictedChars;
  //keyCodes for "e", "+", "-" allowed by number input type
  const keyCodesToRestrict = [69, 187, 189];
  if (e.keyCode !== undefined) {
    if (label === "Age") {
      keyCodesToRestrict.push(190); //"."
    }
    checkIfRestrictedChars = keyCodesToRestrict.includes(e.keyCode);
  }
  return checkIfRestrictedChars && e.preventDefault();
}

const InputRow = ({ label, handleChange, value, units }) => (
  <div className="input-row">
    <div className="label"> {label} </div>
    <div className="input-wrapper">
      <div className="input-group">
        <input
          type="number"
          value={value}
          onChange={handleChange}
          onKeyDown={e => restrictInput(e, label)}
        />
        <div className="units"> {units} </div>
      </div>
    </div>
  </div>
);

export default InputRow;
