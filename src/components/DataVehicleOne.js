import React, { Component } from 'react';

class DataVehicleOne extends Component{
  render(){
    return (
      <div style={{ lineHeight:"0.3",position:"absolute", top:2, left:"22%", width:"100%" }}>
        <div style={{color:"#2196F3"}}>
          <h2>3.435 hours</h2>
          <h2>{this.props.hours} trips</h2>
        </div>
        <div style ={{ color:"white" }}>
          <h4>Speed: {this.props.speedOne} km/h</h4>
          <h4>cargo: {this.props.cargoOne} kg</h4>
        </div>
      </div>
    )
  }
}

export default DataVehicleOne;