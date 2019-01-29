import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Input from './Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Card />
        {/* <Input /> */}
       
        </header>
      </div>
    );
  }
}

export default App;
