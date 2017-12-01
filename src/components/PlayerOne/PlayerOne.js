import React, { Component } from 'react';
import styles from './styles.css';

class PlayerOne extends Component {
  render(){
    return (
      <div className="player-one">
        <h2> Player 1 </h2>
        <h3> {this.props.nameOne.name} </h3>
        <h4> Human </h4>
      </div>
    )
  }
}


export default PlayerOne;



