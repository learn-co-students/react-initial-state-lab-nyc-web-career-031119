// your Bomb code here!
import React, { Component } from 'react';
import ImageSlider from './ImageSlider';

class Bomb extends Component {
  constructor(props) {
      super()
      this.state = {secondsLeft: props.initialCount}
    }

  render(props){
    if (`${this.state.secondsLeft}` == 0){
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }
}


export default Bomb;
