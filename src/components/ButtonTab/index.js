import React from "react";
import './index.css';

const ButtonTab = ({ isSelected, handleClick, label }) => (
  <div
    className={`btn ${ isSelected ? 'selected' : ''}` }
    onClick={handleClick}
  >
    { label }
  </div>
);

export default ButtonTab;
