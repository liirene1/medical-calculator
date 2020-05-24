import React, { useState } from "react";
import { connect } from "react-redux";
import './index.css';

const ExtraInfo = ({ extraInfo }) => {
  const [selected, setSelected] = useState(0);
  if (!extraInfo) return null;

  return (
    <div className="extra-info">
      <div className="btn-row">
        <div
          className={`btn ${selected === 1 ? 'selected' : ''}` }
          onClick={() => setSelected(1)}
        >
          When To Use
        </div>
        <div
          className={`btn ${selected === 2 ? 'selected' : ''}` }
          onClick={() => setSelected(2)}
        >
          Pearls/Pitfalls
        </div>
       </div>
       <div className={selected === 0 ? 'empty' : 'content'}>
        {
          selected === 1 && extraInfo.whenToUse &&
          <ul>
            {extraInfo.whenToUse.map(condition =>
              <li> {condition} </li>
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
  )
}

const mapStateToProps = state => ({ extraInfo: state.extraInfo });

export default connect(mapStateToProps)(ExtraInfo);
