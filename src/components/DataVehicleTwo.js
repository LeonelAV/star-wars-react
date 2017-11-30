import React, { Component } from 'react';

class DataVehicleTwo extends Component{
  render(){
    return (
      <div style={{ display:`${this.props.showData ? 'inline' : 'none'}`, lineHeight:"0.3",position:"absolute", top:2, right:"22.5%" }}>
        <div style={{color:"red"}}>
          <h2>{this.props.hoursTwo} hours</h2>
          <h2>{this.props.tripsTwo} trips</h2>
        </div>
        <div style ={{ color:"white" }}>
          <h4>Speed: {this.props.speedTwo} km/h</h4>
          <h4>cargo: {this.props.cargoTwo} kg</h4>
        </div>
      </div>
    )
  }
}

export default DataVehicleTwo;