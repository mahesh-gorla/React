import React, { Component } from 'react';

export default class Box extends Component {
	render() {
		const divStyles = {};
		return (
			<div style={divStyles}>
				<button>Change color</button>
			</div>
		);
	}
}
