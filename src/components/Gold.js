import React, { Component } from 'react';

class Gold extends Component{
  constructor(props){
    super(props);
    this.state={ amountOfGold: 0}
  }

  componentWillMount(){
    this.setState({ amountOfGold: Math.floor(Math.random()*1000)})
  }

  render(){
    return (
      <div style={{ position:"relative", left:"45%" }}>
        <img style={{transform: "rotate(-90deg)", width:65, float: "left"}} src={"../gold.png"}/>
        <h2 style={{float:"left", marginLeft:20, color:"white", fontWeight:"200"}}>{this.state.amountOfGold}kg</h2>
      </div>
    )
  }
}

export default Gold;