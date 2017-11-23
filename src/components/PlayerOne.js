import React, { Component } from 'react';

class PlayerOne extends Component {
  render(){
    let style = {
      fontFamily:"Lato, sans-Serif"
    }
    return (
      <div style={style}>
        <h3 style={{color:"blue"}}>Player 1</h3>
        <h2 style={{color:"white"}}>Luke Skywalker</h2>
        <h4 style={{color:"white"}}>Human</h4>
      </div>
    )
  }
}

export default PlayerOne;



