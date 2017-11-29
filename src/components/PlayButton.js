import React from 'react';

class PlayButton extends React.Component{
  render(){
    return (
      <div style={{position:"absolute", left:"46%", bottom: "10%"}}>
        <button onClick={this.props.clickHandler} style={{ backgroundColor:"#FF9800", color:"white", border: "none", borderRadius:"5%", width: 136, height: 49, fontFamily:"Lato, sans-Serif", boxShadow:"2px 2px 50px -2px black"}}>Play</button>
      </div>
    )
  }
}

export default PlayButton;