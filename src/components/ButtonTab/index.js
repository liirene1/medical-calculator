import React from "react";

const ButtonTab = ({ isSelected, handleClick, label }) => (
  <div
    className={`btn ${ isSelected ? 'selected' : ''}` }
    onClick={handleClick}
  >
    { label }
  </div>
);

export default ButtonTab;
