import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
class Header extends Component {
	render() {
		return (
			<Jumbotron>
				<h1 bsStyle={this.props.lost ? 'danger' : 'primary'} style={{ textAlign: 'center' }}>
					Clicky Game
				</h1>
			</Jumbotron>
		);
	}
}

export default Header;
