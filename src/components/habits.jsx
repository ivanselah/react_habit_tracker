import React, { Component } from "react";
import HabitAddForm from "./habitAddForm";
import Habit from "./habit";
import HabitReset from "./habitReset";

class Habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  handleReset = () => {
    this.props.allReset();
  };

  render() {
    const {
      habits,
      onIncrement: handleIncrement,
      onDecrease: handleDecrease,
      onDelte: handleDelete,
    } = this.props;
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul className="list-box">
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={handleIncrement}
              onDecrease={handleDecrease}
              onDelte={handleDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </ul>
        <HabitReset allReset={this.handleReset} />
      </>
    );
  }
}

export default Habits;
