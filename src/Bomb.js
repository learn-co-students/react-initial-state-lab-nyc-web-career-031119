// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  bombTimer = () => {
    if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return `Boom!`
    }
  }

  // {this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!`}
  render() {
    return (
      <div>
        {this.bombTimer()}
      </div>
    )
  }
}

export default Bomb
