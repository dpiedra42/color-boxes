import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1 className = "App-title">Changing Color Boxes!</h1>
        <p className = "App-desc">Click on a box and it will change to a new color</p>
        <ColorBoxes />
      </div>
    );
  }
} 

export default App;
