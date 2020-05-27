import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonTab from "components/ButtonTab";
import { extraInfoLabels } from "constants/labels";
import './index.css';

export const ExtraInfo = () => {
  const { extraInfo } = useSelector(state => ({ extraInfo: state.extraInfo }));
  const [selected, setSelected] = useState('');
  const { whenToUse, pearlsPitfalls } = extraInfo;
  if (!whenToUse && !pearlsPitfalls) return null;

  return (
    <div className="extra-info">
      <div className="btn-row">
        {
          extraInfo.whenToUse &&
          <ButtonTab
            isSelected={selected === extraInfoLabels.WHEN_TO_USE}
            handleClick={() => setSelected(extraInfoLabels.WHEN_TO_USE)}
            label={extraInfoLabels.WHEN_TO_USE}
          />
        }
        {
          extraInfo.pearlsPitfalls &&
          <ButtonTab
            isSelected={selected === extraInfoLabels.PEARLS_PITFALLS}
            handleClick={() => setSelected(extraInfoLabels.PEARLS_PITFALLS)}
            label={extraInfoLabels.PEARLS_PITFALLS}
          />
        }
      </div>

      <div className={selected === '' ? 'empty' : 'content'}>
        {
          selected === extraInfoLabels.WHEN_TO_USE &&
          extraInfo.whenToUse &&
          <ul>
            {extraInfo.whenToUse.map((condition, index) =>
              <li key={index}> {condition} </li>
            )}
          </ul>
        }
        {
          selected === extraInfoLabels.PEARLS_PITFALLS &&
          extraInfo.pearlsPitfalls &&
          <div>
            <div className="title"> {extraInfo.pearlsPitfalls.title} </div>
            <div> {extraInfo.pearlsPitfalls.text} </div>
          </div>
        }
      </div>
    </div>
  );
}
