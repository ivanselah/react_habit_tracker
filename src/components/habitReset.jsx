import React, { Component } from "react";

class HabitReset extends Component {
  handleReset = () => {
    this.props.allReset();
  };

  render() {
    return (
      <button className="reset-button" onClick={this.handleReset}>
        <i className="fas fa-undo"></i>
      </button>
    );
  }
}

export default HabitReset;
