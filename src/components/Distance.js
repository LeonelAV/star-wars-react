import React, { Component } from 'react';

class Distance extends Component{

  render(){
    return (
      <div style={{ position:"absolute", left:"45.5%", top:"60%" }}>
        <img alt="distance" style={{width:60, float: "left"}} src={"distance.png"}/>
        <h2 style={{float:"left", marginLeft:20, color:"white", fontWeight:"200"}}>{this.props.distance}km</h2>
      </div>
    )
  }
}

export default Distance;