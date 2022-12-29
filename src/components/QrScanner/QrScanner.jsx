import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';

export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if (data) {
      this.setState({
        result: data.text,
      })
    } 
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 400,
      width: 400,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}