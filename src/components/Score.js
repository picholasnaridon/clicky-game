import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
class Score extends Component {
	render() {
		return (
			<h1>
				Score: <Label bsStyle={this.props.lost ? 'danger' : 'primary'}>{this.props.score}</Label> | High Score:{' '}
				<Label bsStyle={this.props.lost ? 'danger' : 'success'}> {this.props.highScore}</Label>
			</h1>
		);
	}
}

export default Score;
