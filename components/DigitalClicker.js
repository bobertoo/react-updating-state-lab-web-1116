import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.clickHandlerPlus = this.clickHandlerPlus.bind(this)
  }

  clickHandlerPlus() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandlerPlus}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

module.exports = DigitalClicker;
