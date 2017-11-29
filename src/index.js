import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';
import Score from './components/Score';
import Gold from './components/Gold';
import Distance from './components/Distance'
import PlayButton from './components/PlayButton';
import ChangePlayers from './components/ChangePlayers';
import VehiclePlayerOne from './components/VehiclePlayerOne';
import DataVehicleOne from './components/DataVehicleOne';
import VehiclePlayerTwo from './components/VehiclePlayerTwo';
import DataVehicleTwo from './components/DataVehicleTwo';
import YouWon from './components/YouWon';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { playerOne: [], vehicleOneName:'vehicleOneName', speedOne:0, cargoOne:0, playerTwo: []}
  }

  componentDidMount(){
    let apiValidPages=[1,2,3,4,5,7,8,9] // the page 6 of our API is the only one who doen't have any people with vehicles available
    let randomIndexOne=Math.floor(Math.random()*9)
    let randomPageOne= apiValidPages[randomIndexOne]// random page of the API excluding page 6.
      function isNumber(obj) {
            return obj.length !== 0
      }
      function filteredByName(item){
        if(isNumber(item.vehicles)){
          return true
        }
          return false
        }

/****** PEOPLE API RESQUEST PLAYER ONE *******/
    fetch('https://swapi.co/api/people/?page=' + randomPageOne)// API peticion for the player
      .then(results => {
        return results.json();
       })
      .then(data => {
        let dataPlayers= data.results
        let arrByVehicle= dataPlayers.filter(filteredByName)// used to filter the array of people, we don't want those ones who doesn't have vehicles
        let arrLenght=arrByVehicle.length //The length of the filtered array(only people with vehicles is in)
        let playerIndex= Math.floor(Math.random()*arrLenght)// choose a random vehicle from the filtered array
        console.log(dataPlayers)
        console.log(arrByVehicle)
        console.log(arrLenght)
        console.log(arrByVehicle[playerIndex])
        console.log(arrByVehicle[playerIndex].vehicles)
        console.log(arrByVehicle[playerIndex].vehicles.length)
        console.log('---------------')
        let randomUrl= Math.floor(Math.random()*(arrByVehicle[playerIndex].vehicles.length))
        console.log(randomUrl)
        let urlOne=arrByVehicle[playerIndex].vehicles[randomUrl]
        console.log(urlOne)
        this.setState({ 
          playerOne: arrByVehicle[playerIndex],
          vehicleOneUrl: arrByVehicle[playerIndex].vehicles[randomUrl]
        })
        console.log(this.state.vehicleOneUrl)


    const urlVehicles=this.state.vehicleOneUrl
     
     fetch(urlVehicles) //API peticion for the vehicle
       .then(results => {
        return results.json();
       })
    .then(data => {
      console.log(urlVehicles)
      console.log(data)
      console.log(data.name)
      console.log(data.max_atmosphering_speed)
      console.log(data.cargo_capacity)
      this.setState({
        vehicleOneName: data.name,
        speedOne: data.max_atmosphering_speed,
        cargoOne: data.cargo_capacity
      })
      console.log( this.state.vehicleOneName)
  })
  })

}

  render() {
 
    return (
      <div  className="App">
        <YouWon />
        <div style={{display:"flex", justifyContent:"space-evenly", position:"relative", top:100}}>
          <PlayerOne nameOne={this.state.playerOne} />
          <h2 style={{color:"white", fontWeight:400}}>VS</h2>
          <PlayerTwo nameTwo={this.state.playerTwo}/>
        </div>
        <Score />
        <Gold />
        <Distance />
        <PlayButton />
        <ChangePlayers />
        <div className="player-one" style={{ position: "relative", right:"6.5%", top: "150%", width:"148%" }}>
         <VehiclePlayerOne vehicleOne={this.state.vehicleOneName}/>
         <DataVehicleOne speedOne= {this.state.speedOne} cargoOne={this.state.cargoOne}/>
        </div>
        <div style={{ position: "relative", right:"1%", bottom: 6 }}>
          <VehiclePlayerTwo />
          <DataVehicleTwo />
        </div>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

