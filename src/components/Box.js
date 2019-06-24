import React, { Component } from 'react';

export default class Box extends Component {
	render() {
		const divStyles = {
			width: '300px',
			height: '400px',
			margin: '20px'
		};
		return (
			<div
				style={{
					backgroundColor: `${this.props.color}`,
					width: '300px',
					height: '350px',
					margin: '20px'
				}}
			>
				<div>
					<button
						onClick={() => {
							this.props.handleClick();
						}}
						style={{
							marginTop: '50%'
						}}
					>
						Change Color
					</button>
				</div>
			</div>
		);
	}
}
