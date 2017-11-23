import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerOne from './components/PlayerOne';

class App extends Component {
  render() {
    return (
      <div  className="App">
        <PlayerOne />
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

