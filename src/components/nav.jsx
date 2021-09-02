import React, { PureComponent } from "react";

class Nav extends PureComponent {
  render() {
    const { totalCount } = this.props;
    return (
      <>
        <div className="nav">
          <i className="fab fa-angellist"></i>
          <span>Habit Tracker</span>
          <span className="habit-total-count">{totalCount}</span>
        </div>
      </>
    );
  }
}

export default Nav;
