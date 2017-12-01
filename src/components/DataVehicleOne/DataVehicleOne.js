import React, { Component } from 'react';
import styles from './styles.css'

class DataVehicleOne extends Component{
  render(){
    return (
      <div className="data-vehicle-one" style={{display:`${this.props.showData ? 'inline' : 'none'}`}}>
        <div className="hours-trip-one" >
          <h2>{this.props.hoursOne} hours</h2>
          <h2>{this.props.tripsOne} trips</h2>
        </div>
        <div className="speed-cargo-one" >
          <h4>Speed: {this.props.speedOne} km/h</h4>
          <h4>cargo: {this.props.cargoOne} kg</h4>
        </div>
      </div>
    )
  }
}

export default DataVehicleOne;