import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.changeBitrate = this.changeBitrate.bind(this);
    this.changeResolution = this.changeResolution.bind(this);
  }

  changeBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    });
  }

  changeResolution() {
    // let vidSettings = Object.assign({}, this.state.settings.video, {resolution: '720p'});
    // debugger
    // console.log(vidSettings)
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: Object.assign({}, this.state.settings.video, {resolution: '720p'})})
    });
  }

  render() {
    return (
      <div>
        {this.state.settings.bitrate}
        <button className='bitrate' onClick={this.changeBitrate}>Change Bitrate</button>
        {this.state.settings.video.resolution}
        <button className='resolution' onClick={this.changeResolution}>Change Res</button>
      </div>
    );
  }
}

module.exports = DigitalClicker;
