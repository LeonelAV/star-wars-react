import React, { Component } from 'react';
import styles from './styles.css';

class VehiclePlayerOne extends Component{
  render(){
    return (
      <div className="vehicle-player-one">
        <img alt= "" src={"space.png"} />
        <h3 >{this.props.vehicleOne}</h3>
      </div>
    )
  }
}

export default VehiclePlayerOne;