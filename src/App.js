import React, { Component } from 'react';
import './App.css';

import KeyPad from './components/KeyPad';
import Display from './components/Display';
import * as math from 'mathjs';

class App extends Component {

  constructor(){
    super();

    this.state = {
      calculation: "",
      display: "",
      isNewNumber: true
    }
  }

  handleEqual = () => {
    this.setState({
      display: math.evaluate(this.state.calculation),
      isNewNumber: true
    })
  }

  onClick = button => {

    if(button === "C"){
      this.setState({
        calculation: "",
        display: "",
        isNewNumber: true
      })
    }
    
    else if(button === "+"){
      this.setState({
        calculation: this.state.calculation + button,
        isNewNumber: true
      })
    }

    else if (this.state.isNewNumber === false) {
      this.setState({
        display: this.state.calculation + button,
        calculation: this.state.calculation + button
      })
    }

    else {
      this.setState({
        display: button,
        calculation: this.state.calculation + button,
        isNewNumber: false
      })
    }

  };
  
  render() {
    return (
      <div>
        <div className="calculator-body">
          <Display display={this.state.display} />
          <KeyPad onClick={this.onClick} />
          <button onClick={() => this.handleEqual()}>=</button>
        </div>
      </div>
    );
  }
};

export default App;
