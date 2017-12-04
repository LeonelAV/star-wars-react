import React, { Component } from 'react';
import styles from './styles.css'

class VehiclePlayerTwo extends Component{
  render(){
    return (
      <div className="vehicle-player-two" style= {styles}>
        <img alt="" src={"space.png"} />
        <h3> {this.props.vehicleTwo} </h3>
      </div>
    )
  }
}

export default VehiclePlayerTwo;