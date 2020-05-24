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
            className="btn"
            onClick={() => this.handleClick(1)}
          >
            When To Use<span> >> </span>
          </div>
          <div
            className="btn"
            onClick={() => this.handleClick(2)}
          >
            Pearls/Pitfalls<span> >> </span>
          </div>
        </div>
        <div className="content">
          {
            selected === 1 && extraInfo.whenToUse &&
            <div>{extraInfo.whenToUse}</div>
          }
          {
            selected === 2 && extraInfo.pearlsPitfalls &&
            <div>
              {extraInfo.pearlsPitfalls.title}
              {extraInfo.pearlsPitfalls.text}
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    extraInfo: state.extraInfo
  };
}

export default connect(
  mapStateToProps
)(ExtraInfo);
