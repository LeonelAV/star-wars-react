import React from 'react';

class PlayButton extends React.Component{
  render(){
    return (
      <div style={{position:"absolute", left:"46%", bottom: "10%"}}>
        <button style={{ backgroundColor:"#FF9800", color:"white", border: "none", borderRadius:"5%", width: 136, height: 49 }}>Play</button>
      </div>
    )
  }
}

export default PlayButton;