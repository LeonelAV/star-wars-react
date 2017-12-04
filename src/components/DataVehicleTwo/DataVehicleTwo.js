import React, { Component } from 'react';
import styles from './styles.css'

class DataVehicleTwo extends Component{
  render(){
    return (
      <div className="data-two" style={{ display:`${this.props.showData ? 'inline' : 'none'}`}} >
        <div className="hours-trip-two" style= {styles}>
          <h2>{this.props.hoursTwo} hours</h2>
          <h2>{this.props.tripsTwo} trips</h2>
        </div>
        <div className="speed-cargo-two" >
          <h4>Speed: {this.props.speedTwo} km/h</h4>
          <h4>cargo: {this.props.cargoTwo} kg</h4>
        </div>
      </div>
    )
  }
}

export default DataVehicleTwo;