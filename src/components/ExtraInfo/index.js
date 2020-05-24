import React, { Component } from "react";
import { connect } from "react-redux";
import './index.css';

export class ExtraInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(tab) {
    this.setState({ selected: tab });
  }
  render() {
    const { extraInfo } = this.props;
    const { selected } = this.state;
    return (
      <div className="extra-info">
        <div className="btn-row">
          <div
            className={`btn ${selected === 1 ? 'selected' : ''}` }
            onClick={() => this.handleClick(1)}
          >
            When To Use
          </div>
          <div
            className={`btn ${selected === 2 ? 'selected' : ''}` }
            onClick={() => this.handleClick(2)}
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
    );
  }
}

const mapStateToProps = state => ({ extraInfo: state.extraInfo });

export default connect(mapStateToProps)(ExtraInfo);
