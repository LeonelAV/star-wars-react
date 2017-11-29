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
    this.state = { hours:0, distance: 0, amountOfGold: 0, playerOne: [], vehicleOneName:'', speedOne:0, cargoOne:0, playerTwo: []}
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    console.log('button clicked')
    let hours = Math.round(Math.round((this.state.amountOfGold / this.state.cargoOne) + 0.5))
    this.setState({hours: hours})
    console.log(hours)
  }

  componentDidMount(){
    /******AMOUNT OF GOLD and DISTANCE ******/
    let goldQuantity = Math.floor(Math.random()*100)
    let distance= Math.floor(Math.random()*2000)
    this.setState({ amountOfGold: goldQuantity, distance: distance})
 
    let apiValidPages=[1,3,4,5,7,8] // the pages 2, 6 and 9 of our API doesn´t have any people with vehicles available
    let randomIndexOne=Math.floor(Math.random()*6)
    let randomPageOne= apiValidPages[randomIndexOne]// random page of the API excluding page 2, 6 and 9.
    let randomIndexTwo=Math.floor(Math.random()*6)
    let randomPageTwo= apiValidPages[randomIndexTwo]
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
        let randomUrl= Math.floor(Math.random()*(arrByVehicle[playerIndex].vehicles.length))
        let urlOne=arrByVehicle[playerIndex].vehicles[randomUrl]
        this.setState({ 
          playerOne: arrByVehicle[playerIndex],
          vehicleOneUrl: arrByVehicle[playerIndex].vehicles[randomUrl]
        })

/*********** VEHICLES API REQUEST PLAYER ONE *******/
    const urlVehicles=this.state.vehicleOneUrl
    fetch(urlVehicles) //API peticion for the vehicle
       .then(results => {
        return results.json();
       })
    .then(data => {
      this.setState({
        vehicleOneName: data.name,
        speedOne: data.max_atmosphering_speed,
        cargoOne: data.cargo_capacity
      })
  })



/****** PEOPLE API RESQUEST PLAYER TWO *******/

      fetch('https://swapi.co/api/people/?page=' + randomPageTwo)// API peticion for the player
      .then(results => {
        return results.json();
       })
      .then(data => {
        let dataPlayers= data.results
        let arrByVehicle= dataPlayers.filter(filteredByName)// used to filter the array of people, we don't want those ones who doesn't have vehicles
        let arrLenght=arrByVehicle.length //The length of the filtered array(only people with vehicles is in)
        let playerIndex= Math.floor(Math.random()*arrLenght)// choose a random vehicle from the filtered array
        let randomUrl= Math.floor(Math.random()*(arrByVehicle[playerIndex].vehicles.length))
        let urlOne=arrByVehicle[playerIndex].vehicles[randomUrl]
        this.setState({ 
          playerTwo: arrByVehicle[playerIndex],
          vehicleTwoUrl: arrByVehicle[playerIndex].vehicles[randomUrl]
        })


/*********** VEHICLES API REQUEST PLAYER TWO *******/
    const urlVehicles=this.state.vehicleTwoUrl
    fetch(urlVehicles) //API peticion for the vehicle
       .then(results => {
        return results.json();
       })
    .then(data => {
      this.setState({
        vehicleTwoName: data.name,
        speedTwo: data.max_atmosphering_speed,
        cargoTwo: data.cargo_capacity
      })
  })
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
        <Gold gold={this.state.amountOfGold}/>
        <Distance distance={this.state.distance}/>
        <PlayButton clickHandler={this.clickHandler}/>
        <ChangePlayers />
        <div className="player-one" style={{ position: "relative", right:"6.5%", top: "150%", width:"148%" }}>
         <VehiclePlayerOne vehicleOne={this.state.vehicleOneName}/>
         <DataVehicleOne hours={this.state.hours} speedOne= {this.state.speedOne} cargoOne={this.state.cargoOne} amountOfGold={this.state.amountOfGold} />
        </div>
        <div style={{ position: "relative", right:"1%", bottom: 6 }}>
          <VehiclePlayerTwo vehicleTwo={this.state.vehicleTwoName}/>
          <DataVehicleTwo speedTwo= {this.state.speedTwo} cargoTwo={this.state.cargoTwo}/>
        </div>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

