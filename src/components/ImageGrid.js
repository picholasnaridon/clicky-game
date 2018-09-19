import React, { Component } from 'react';
import Image from './Image';
import Score from './Score';
import { Well, Label } from 'react-bootstrap';

class ImageGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedCards: [],
			score: 0,
			lost: false,
			currentCards: [],
			highScore: 0
		};

		this.clickHandler = this.clickHandler.bind(this);
		this.checkCard = this.checkCard.bind(this);
		this.shuffle = this.shuffle.bind(this);
		this.lostGame = this.lostGame.bind(this);
		this.setCards = this.setCards.bind(this);
	}

	componentDidMount() {
		this.setCards();
	}

	clickHandler(name) {
		if (!this.checkCard(name)) {
			this.setState({
				clickedCards: [ ...this.state.clickedCards, name ],
				score: (this.state.score += 1)
			}); //simple value
			this.setCards();
		} else {
			this.lostGame();
		}
	}

	setCards() {
		var newArray = this.shuffle(this.props.cards);
		var twelveCards = newArray.slice(0, 12);
		this.setState({
			currentCards: twelveCards
		});
	}

	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ a[i], a[j] ] = [ a[j], a[i] ];
		}
		return a;
	}

	lostGame() {
		this.setState({
			currentCards: [],
			lost: true
		});
		if (this.state.score > this.state.highScore) {
			this.setState({ highScore: this.state.score });
		}
		setTimeout(() => {
			this.setState({
				score: 0,
				lost: false,
				clickedCards: []
			});
			this.setCards();
		}, 3000);
	}

	checkCard(card) {
		if (this.state.clickedCards.indexOf(card) > -1) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		var that = this;
		if (!this.state.lost) {
			return (
				<div>
					<Score lost={this.state.lost} score={this.state.score} highScore={this.state.highScore} />
					<Well style={{ height: '700px' }}>
						{this.state.currentCards.map(function(card) {
							return (
								<Image key={card.id} name={card.name} url={card.url} clickHandler={that.clickHandler} />
							);
						})}
					</Well>
				</div>
			);
		} else {
			return (
				<div>
					<Score lost={this.state.lost} score={this.state.score} highScore={this.state.highScore} />
					<h1 style={{ textAlign: 'center', color: 'red' }}>You lose!</h1>
				</div>
			);
		}
	}
}

export default ImageGrid;
