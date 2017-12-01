import React, { Component } from 'react';
import styles from './styles.css';

class YouWon extends Component{
  render(){
    return <h1 className="you-won" style={{ display:`${this.props.youWon ? 'inline' : 'none'}` }}>YOU WON!!!</h1>
  }}

export default YouWon;