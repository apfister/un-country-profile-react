import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Label from 'calcite-react/Label';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Label>Hello World</Label>
        </header>
      </div>
    );
  }
}

export default App;
