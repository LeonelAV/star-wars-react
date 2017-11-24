import React, { Component } from 'react';

class VehiclePlayerOne extends Component{
  render(){
    return (
      <div>
        <img src={"../space.png"} style={{position:"absolute", top:"40%", left:"24%", width:"65px"}} />
        <h3 style = {{ color:"white", position:"absolute", left:"22%" }}>Snowspeeder</h3>
      </div>
    )
  }
}

export default VehiclePlayerOne;