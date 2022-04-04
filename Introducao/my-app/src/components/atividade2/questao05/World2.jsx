import React, { Component } from "react";

class World2 extends Component {
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (arena) => {
          return React.cloneElement(arena)})}
      </div>
    );
  }
}

export default World2;
