import React, { Component } from 'react';
import styles from './styles.css'

class Score extends Component {
  render(){
    return (
      <div className="score" style= {styles}>
        <h2>{this.props.scoreOne} - {this.props.scoreTwo}</h2>
      </div>
    )
  }
}

export default Score;