import React, { Component } from 'react';

class VehiclePlayerOne extends Component{

  render(){
    return (
      <div>
        <img src={"../space.png"} style={{position:"absolute", bottom:12, left:"24%", width:"65px"}} />
        <h3 style = {{ color:"white", position:"absolute", left:"22%", top:-30 }}>{this.props.vehicleName}</h3>
      </div>
    )
  }
}

export default VehiclePlayerOne;