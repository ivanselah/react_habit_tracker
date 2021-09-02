import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrease = () => {
    this.props.onDecrease(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelte(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <div className="habit-count">{count}</div>
        <div className="button-box">
          <button
            className="habit-button habit-increase"
            onClick={this.handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={this.handleDecrease}
          >
            <i className="fas fa-minus-square"></i>
          </button>
          <button
            className="habit-button habit-delete"
            onClick={this.handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Habit;
