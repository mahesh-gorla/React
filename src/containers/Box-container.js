import React, { Component } from 'react';
import Box from '../components/Box';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class BoxContainer extends Component {
	render() {
		const divStyles = {
			border: '15px solid #ffffff',
			padding: '50px'
		};
		return (
			<div style={divStyles}>
				<Box handleClick={this.props.loadColor} color={this.props.color} />
				<p>{this.props.color}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(
	mapStateToProps,
	actionCreators
)(BoxContainer);
