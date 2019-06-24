import React, { Component } from 'react';
import Box from '../components/Box';

export default class BoxContainer extends Component {
	render() {
		const divStyles = {
			width: '300px',
			height: '400px',
			border: '15px solid #ffffff',
			padding: '50px',
			margin: '20px',
			backgroundColor: 'red'
		};
		return (
			<div style={divStyles}>
				<Box />
			</div>
		);
	}
}
