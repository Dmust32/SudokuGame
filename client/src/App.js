import React, { Component } from 'react';
import './App.css';
import BoardTwo from './components/BoardTwo'
import ValuePicker from './components/ValuePicker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardTwo />
        <ValuePicker />
      </div>
    );
  }
}

export default App;
