import React, { Component } from 'react';

class KeyPad extends Component{
  render() {
    return (
      <div className="button">

        <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>

        <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>

        

      </div>
    );
  }
};

export default KeyPad;