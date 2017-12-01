import React, { Component } from 'react';
import styles from './styles.css';

class PlayerTwo extends Component {
  render(){
    return (
      <div className="player-two">
        <h2 >Player 2</h2>
        <h3 >{this.props.nameTwo.name}</h3>
        <h4 >Human</h4>
      </div>
    )
  }
}

export default PlayerTwo;
