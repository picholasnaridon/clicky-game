import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
class Score extends Component {
	render() {
		if (!this.props.lost) {
			return (
				<h1>
					Score: <Label bsStyle="primary">{this.props.score}</Label> | High Score:{' '}
					<Label bsStyle="success"> {this.props.highScore}</Label>
				</h1>
			);
		} else {
			return (
				<h1>
					Score: <Label bsStyle="danger">{this.props.score}</Label> | High Score:{' '}
					<Label bsStyle="danger"> {this.props.highScore}</Label>
				</h1>
			);
		}
	}
}

export default Score;
