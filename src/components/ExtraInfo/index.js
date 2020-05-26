import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonTab from "../ButtonTab";
import './index.css';

export const ExtraInfo = () => {
  const { extraInfo } = useSelector(state => ({ extraInfo: state.extraInfo }));
  const [selected, setSelected] = useState(0);
  const { whenToUse, pearlsPitfalls } = extraInfo;
  if (!whenToUse && !pearlsPitfalls) return null;

  return (
    <div className="extra-info">
      <div className="btn-row">
        {
          extraInfo.whenToUse &&
          <ButtonTab
            isSelected={selected === 1}
            handleClick={() => setSelected(1)}
            label="When To Use"
          />
        }
        {
          extraInfo.pearlsPitfalls &&
          <ButtonTab
            isSelected={selected === 2}
            handleClick={() => setSelected(2)}
            label="Pearls/Pitfalls"
          />
        }
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
