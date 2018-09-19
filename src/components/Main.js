import React, { Component } from 'react';
import Header from './Header'
import ImageGrid from './ImageGrid'
import Images from '../assets/js/images'

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageGrid cards={this.props.cards} />
      </div>
    );
  }
}

export default Main;