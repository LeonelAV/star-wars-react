import React, { Component } from 'react';

class Score extends Component {
  render(){
    let style = {
      fontSize:80,
      color: "white",
      textAlign: "center",
      letterSpacing:8,
      position: "relative",
      left: 24,
      fontWeight:400, 
      top: 35
    }
    return (
      <div>
        <h2 style={style}>1 - 1</h2>
      </div>
    )
  }
}

export default Score;