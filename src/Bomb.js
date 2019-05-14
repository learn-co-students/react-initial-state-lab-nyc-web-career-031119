import React, { Component } from 'react';
// your Bomb code here!
class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return (
      <div>{this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"}</div>
    )
  }
}

export default Bomb
