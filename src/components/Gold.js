import React, { Component } from 'react';

class Gold extends Component{
  render(){
    return (
      <div style={{ position:"relative", left:"45%" }}>
        <img style={{transform: "rotate(-90deg)", width:65, float: "left"}} src={"../gold.png"}/>
        <h2 style={{float:"left", marginLeft:20, color:"white", fontFamily:"Lato, sans-Serif", fontWeight:"200"}}>500kg</h2>
      </div>
    )
  }
}

export default Gold;