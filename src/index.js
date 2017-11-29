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
  constructor(props){
    super(props);
    this.state = { playerOne: [], playerTwo: []}
  }

  componentDidMount(){
    // API peticion for player ONE
    let randomPage= Math.floor(Math.random()*9) + 1 // this is a random number to choose one page of the API, there 9 in total
    fetch('https://swapi.co/api/people/?page=' + randomPage)// API peticion for the player
      .then(results => {
        return results.json();
       })
      .then(data => {
        let arrLenght = data.results.length // Total number of players we get from the Api
        let playerIndex = Math.floor(Math.random()*arrLenght)// to choose a random player 
        this.setState({ 
          playerOne: data.results[playerIndex]
        })
        // console.log(this.state.playerOne)
  })
    //API peticion for Player Two => we don't use the same because of the pagination of the json, like that is less probability of getting the same player
    let randomPageTwo= Math.floor(Math.random()*9) + 1 // this is a random number to choose one page of the API, there 9 in total
    fetch('https://swapi.co/api/people/?page=' + randomPageTwo)// API peticion for the player
      .then(results => {
        return results.json();
       })
      .then(data => {
        let dataPlayers= data.results

        function isNumber(obj) {
          return obj.length !== 0
        }
        function filteredByName(item){
          if(isNumber(item.vehicles)){
            return true
          }
          return false
        }
        let arrByVehicle= dataPlayers.filter(filteredByName)// used to filter the array of people, we don't want those ones who doesn't have vehicles
        let arrLenght=arrByVehicle.length //The length of the filtered array(only people with vehicles is in)
        let playerIndex= Math.floor(Math.random()*arrLenght)// choose a random vehicle from the filtered array
        console.log(dataPlayers)
        console.log(arrByVehicle)
        console.log(arrLenght)
        
        this.setState({ 
          playerTwo: arrByVehicle[playerIndex]
        }) 
  })
    }


  render() {
 
    return (
      <div  className="App">
        <YouWon />
        <div style={{display:"flex", justifyContent:"space-evenly", position:"relative", top:100}}>
          <PlayerOne nameOne={this.state.playerOne}/>
          <h2 style={{color:"white", fontWeight:400}}>VS</h2>
          <PlayerTwo nameTwo={this.state.playerTwo}/>
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
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

