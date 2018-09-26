import React from 'react';
import { Label } from 'react-bootstrap';

const Score = (props) => {
	return (
		<h1>
			Score: <Label bsStyle={props.lost ? 'danger' : 'primary'}>{props.score}</Label> | High Score:{' '}
			<Label bsStyle={props.lost ? 'danger' : 'success'}> {props.highScore}</Label>
		</h1>
	);
};

export default Score;
