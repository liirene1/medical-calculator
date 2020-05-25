import React from "react";
import './index.css';

const InputRow = ({ label, handleChange, value, units }) => (
  <div className="input-row">
    <div className="label"> {label} </div>
    <div className="input-wrapper">
      <div className="input-group">
        <input
          type="number"
          value={value}
          onChange={handleChange}
        />
        <div className="units"> {units} </div>
      </div>
    </div>
  </div>
);

export default InputRow;
