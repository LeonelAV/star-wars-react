import React, {Component} from 'react';

class ChangePlayers extends Component{
  render(){
    return (
      <div style={{ position:"absolute", bottom: "10% ", right: "17%" }}>
        <button onClick={this.props.changePlayers} style={{cursor:"pointer", backgroundColor:"#03A9F4", borderRadius:"15%", width: 110, height: 40, border:"none", color: "white", fontFamily:"Lato, sans-Serif", boxShadow:"2px 2px 50px -2px black"}}>Change Players</button>
      </div>
    )
  }
}

export default ChangePlayers;