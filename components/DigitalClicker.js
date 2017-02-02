import React from 'react'
import ReactDom from 'react-dom'

class DigitalClicker extends React.Component {
  constructor(props) {
    super()

    this.state = {
      timesClicked: 0
    }

    this.clicky = this.clicky.bind(this)
  }
  clicky(){
    this.setState ({
      timesClicked: this.state.timesClicked + 1
    })
  }
  render(){
    return (
      <div>
        <button onClick={this.clicky}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker
