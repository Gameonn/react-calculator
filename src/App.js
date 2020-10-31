import React, { Component } from 'react';
import Calculator from './container/Calculator/Calculator';
import Result from './components/Result/Result';
import './App.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <h1> Calculator </h1>
        <Result />
        <Calculator />
      </div>
    );
  }

}

export default App;
