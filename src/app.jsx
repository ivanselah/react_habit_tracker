import "./app.css";
import React, { Component } from "react";
import Nav from "./components/nav";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  copyFindIndex = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    return { habits, index };
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    // const { habits, index } = this.copyFindIndex(habit);
    // habits[index].count++;
    this.setState({
      habits,
    });
  };

  handleDecrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count === 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
    this.setState({
      habits,
    });
  };

  handleDelete = (habit) => {
    const { habits, index } = this.copyFindIndex(habit);
    habits.splice(index, 1);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const check_eng = /[a-zA-Z]/;
    const check_num = /[0-9]/;
    // test 함수이용 시 boolean 값얻음
    if (check_kor.test(name) && name.length > 6) {
      alert("최대 한글 6글자 입력 가능");
      return;
    } else if (check_eng.test(name) && name.length > 10) {
      alert("최대 영문 10글자 입력 가능");
      return;
    } else if (check_num.test(name)) {
      alert("숫자는 입력 ❌");
      return;
    } else {
      const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
      if (habits.length > 5) {
        alert("최대 5개 등록 가능");
      } else {
        this.setState({ habits });
      }
    }
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    const { habits } = this.state;
    return (
      <>
        <Nav totalCount={habits.filter((item) => item.count > 0).length} />
        <div className="main-container">
          <Habits
            key={habits.id}
            habits={habits}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
            onDelte={this.handleDelete}
            onAdd={this.handleAdd}
            allReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}

export default App;
