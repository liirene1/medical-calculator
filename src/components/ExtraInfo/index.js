import React, { useState } from "react";
import { connect } from "react-redux";
import ButtonTab from "../ButtonTab";
import './index.css';

const ExtraInfo = ({ extraInfo }) => {
  const [selected, setSelected] = useState(0);
  if (!extraInfo) return null;

  return (
    <div className="extra-info">
      <div className="btn-row">
        <ButtonTab
          isSelected={selected === 1}
          handleClick={() => setSelected(1)}
          label="When To Use"
        />
        <ButtonTab
          isSelected={selected === 2}
          handleClick={() => setSelected(2)}
          label="Pearls/Pitfalls"
        />
      </div>

      <div className={selected === 0 ? 'empty' : 'content'}>
        {
          selected === 1 && extraInfo.whenToUse &&
          <ul>
            {extraInfo.whenToUse.map((condition, index) =>
              <li key={index}> {condition} </li>
            )}
          </ul>
        }
        {
          selected === 2 && extraInfo.pearlsPitfalls &&
          <div>
            <div className="title"> {extraInfo.pearlsPitfalls.title} </div>
            <div> {extraInfo.pearlsPitfalls.text} </div>
          </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ extraInfo: state.extraInfo });

export default connect(mapStateToProps)(ExtraInfo);
