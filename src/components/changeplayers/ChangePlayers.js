import React, { Component } from 'react';
import styles from './styles.css';

class ChangePlayers extends Component{
  render(){
    return (
      <div className="change">
        <button  onClick={this.props.changePlayers}>Change Players</button>
      </div>
    )
  }
}

export default ChangePlayers;