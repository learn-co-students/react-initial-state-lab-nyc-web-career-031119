import React, { Component } from 'react';

class Bomb extends Component {


	constructor(props, context) {
		super(props, context);
		this.state = {
			secondsLeft: this.props.initialCount,
			time: 0
		};
		this.time;
	}

	// decrementSeconds = () => {
	// 	this.setState({
	// 		this.time =  setInterval(() => this.setState({
	// 		secondsLeft: this.state.secondsLeft - 1}),
	// 		1000)
	// 	})
	// };

	resetTimer = () => {
		this.setState({
			secondsLeft: 0
		})
	};

	render() {
		return (
			<div>
				{this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!` }
				{/*{this.decrementSeconds}*/}
			</div>
		);
	}
}

export default Bomb
