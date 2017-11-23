import React, { Component } from 'react';

class PlayerTwo extends Component {
  render(){
    let style = {
      fontFamily:"Lato, sans-Serif"
    }
    return (
      <div style={style}>
        <h2 style={{color:"red", margin: 0}}>Player 2</h2>
        <h2 style={{color:"white", margin: 0}}>Darth Vader</h2>
        <h4 style={{color:"white", margin: 0}}>Human</h4>
      </div>
    )
  }
}

export default PlayerTwo;
