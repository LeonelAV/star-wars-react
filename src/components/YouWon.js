import React, { Component } from 'react';

class YouWon extends Component{
  render(){
    let style = {
      position: "absolute",
      left: "40%",
      top: 19,
      fontSize: 54, 
      color:"#8BC34A",
      fontFamily:"Lato, sans-serif",
      fontWeight:"200",
      display:`${this.props.youWon ? 'inline' : 'none'}`
    }
    return <h1 style={ style }>YOU WON!!!</h1>
  }}

export default YouWon;