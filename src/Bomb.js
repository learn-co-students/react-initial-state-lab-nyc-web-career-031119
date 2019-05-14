import React, {Component} from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  //why passing props in this one but not in ImageSlider???
//we know we are using state because the count is changing, but
//how do I know to pass in props?

  render() {
    if (this.state.secondsLeft === 0) {
      return (
        <div>Boom!</div>
      )
    } else {
      return (
        <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
  }
}


}
