import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';
import Score from './components/Score';
import Gold from './components/Gold';
import Distance from './components/Distance'
import PlayButton from './components/PlayButton';
import ChangePlayers from './components/ChangePlayers';

import VehiclePlayerTwo from './components/VehiclePlayerTwo';

import DataVehicleTwo from './components/DataVehicleTwo';
import YouWon from './components/YouWon';

class App extends Component {
  render() {
    return (
      <div  className="App">
        <YouWon />
        <div style={{display:"flex", justifyContent:"space-evenly", position:"relative", top:100}}>
          <PlayerOne />
          <h2 style={{color:"white", fontWeight:400}}>VS</h2>
          <PlayerTwo />
        </div>
        <Score />
        <Gold />
        <Distance />
        <PlayButton />
        <ChangePlayers />
        <div style={{ position: "relative", right:"1%", bottom: 6 }}>
          <VehiclePlayerTwo />
          <DataVehicleTwo />
        </div>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

