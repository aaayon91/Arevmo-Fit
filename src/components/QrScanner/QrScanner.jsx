import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';

class QrScanner extends Component {
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
      this.props.navigate('/exercise',{state:{exerciseUrl: data.text}});
      // this.setState({
      //   result: data.text,
      // })
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

export function QrScannerWithRouter(props) {
  const navigate = useNavigate();
  return (<QrScanner navigate={navigate}/>)
}

export default QrScanner