// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {secondsLeft: props.initialCount}
  }

  slapIt = () => {
    return this.state.secondsLeft > 0 ? <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>
  }

  render() {
    return(
      this.slapIt()
    )
  }
}
