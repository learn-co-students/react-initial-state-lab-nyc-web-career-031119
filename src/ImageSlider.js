import React, { Component } from 'react';

class ImageSlider extends Component {


	constructor(props, context) {
		super(props, context);
		this.state = {
			currentSlideIndex: 0
		}
	}

	sliderChange = () => {
		this.setState({
			currentSlideIndex: this.state.currentSlideIndex + 1
		})
	};

	render() {
		return (
			<div>
				I am on slide {this.state.currentSlideIndex}

			</div>
		);
	}
}

export default ImageSlider
