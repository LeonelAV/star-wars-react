import React, { Component } from 'react';

class Gold extends Component{
  render(){
    return (
      <div >
        <img style={{transform: "rotate(-90deg)", width:"7%"}} src={"../gold.png"}/>
        <h2>500kg</h2>
      </div>
    )
  }
}

export default Gold;