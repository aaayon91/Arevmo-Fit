import React, { useState, Component } from 'react';
import QrReader from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';
import{ getUser } from '../../utilities/users-service'

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
      let qrCode = data.text
      // if (this.props.user.email === 'admin@admin') {
        this.props.setQrCode(qrCode);
        this.props.getExercise(qrCode)
      // } else this.props.navigate('/exercises',{state:{exerciseUrl: data.text}});
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

export function QrScannerWithRouter({user, setQrCode, getExercise}) {
  const navigate = useNavigate();
  return (
    <QrScanner 
      navigate={navigate} 
      user={user} 
      setQrCode={setQrCode}
      getExercise={getExercise}
    />
  )
}

export default QrScanner