import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';
class App extends Component {
  render() {
    return (
      <div  className="App">
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <PlayerOne />
          <PlayerTwo />
        </div>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

