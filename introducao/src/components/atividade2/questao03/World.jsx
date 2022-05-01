import React, { Component } from "react";

class World extends Component {
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (arena) => {
          return React.cloneElement(arena, {
            nameHero: this.props.nameHero,
            imgHero: this.props.imgHero,
            nameEnemy: this.props.nameEnemy,
            imgEnemy: this.props.imgEnemy
          });
        })}
      </div>
    );
  }
}

export default World;
