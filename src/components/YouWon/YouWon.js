import React, { Component } from 'react';
import styles from './styles.css';

class YouWon extends Component{
  render(){
    return (
    <div className="you-won" style= {styles}>
      <h2 style={{ display:`${this.props.youWon ? 'inline' : 'none'}` }}>YOU WON!!!</h2>
    </div>
  )}
}

export default YouWon;