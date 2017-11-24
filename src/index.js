import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';
import Score from './components/Score';
import Gold from './components/Gold';
import Distance from './components/Distance'

class App extends Component {
  render() {
    return (
      <div  className="App">
        <div style={{display:"flex", justifyContent:"space-evenly", position:"relative", top:100}}>
          <PlayerOne />
          <h2 style={{color:"white", fontFamily:"Lato, sans-Serif", fontWeight:400}}>VS</h2>
          <PlayerTwo />
        </div>
        <Score />
        <Gold />
        <Distance />
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

