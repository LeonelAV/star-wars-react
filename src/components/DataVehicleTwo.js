import React, { Component } from 'react';

class DataVehicleTwo extends Component{
  render(){
    return (
      <div style={{ lineHeight:"0.3",position:"absolute", bottom:170, right:"23%" }}>
        <div style={{color:"red"}}>
          <h2>3.435 hours</h2>
          <h2>144 trips</h2>
        </div>
        <div style ={{ color:"white" }}>
          <h4>Speed: 540 km/h</h4>
          <h4>cargo: 10 kg</h4>
        </div>
      </div>
    )
  }
}

export default DataVehicleTwo;