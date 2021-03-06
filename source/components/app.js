import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    })); 
  }

  render() {
    return (
      <button className="col-small-12 col-medium-10 col-large-4"
        onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button> 
    );
  }
}