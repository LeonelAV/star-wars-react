import React, {Component} from 'react';

class ChangePlayers extends Component{
  render(){
    return (
      <div>
        <button style={{ position:"absolute", bottom: "10% ", right: "17%", backgroundColor:"#03A9F4", borderRadius:"15%", width: 110, height: 40,  border: "none", color: "white"}}>Change Players</button>
      </div>
    )
  }
}

export default ChangePlayers;