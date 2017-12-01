import React, { Component } from 'react';
import styles from './styles.css'

class Distance extends Component{

  render(){
    return (
      <div className="distance" >
        <img alt="distance" src={"distance.png"}/>
        <h2> {this.props.distance}km </h2>
      </div>
    )
  }
}

export default Distance;