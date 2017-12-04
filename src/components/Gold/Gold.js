import React, { Component } from 'react';
import styles from './styles.css'

class Gold extends Component{
  

  render(){
    return (
      <div className="gold" style= {styles}>
        <img alt="gold" src={"gold.png"}/>
        <h2>{this.props.gold}kg</h2>
      </div>
    )
  }
}

export default Gold;