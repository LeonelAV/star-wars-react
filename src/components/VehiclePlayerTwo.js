import React, { Component } from 'react';

class VehiclePlayerTwo extends Component{
  render(){
    return (
      <div >
        <img src={"../space.png"} style={{position:"absolute", bottom:12, left:"72%", width:"65px"}} />
        <h3 style = {{ color:"white", position:"absolute", left:"68%", top: -30 }}>Imperial Speeder Bike</h3>
      </div>
    )
  }
}

export default VehiclePlayerTwo;