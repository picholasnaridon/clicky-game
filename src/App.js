import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from './assets/js/images.js'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
     <Main cards={cards}/>
    );
  }
}

export default App;
