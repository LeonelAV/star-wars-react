import React, { Component } from 'react';
import VehiclePlayerOne from './VehiclePlayerOne';
import DataVehicleOne from './DataVehicleOne';

class PlayerOne extends Component {
  constructor(props){
    super(props);
    this.state = {name:[], id: 0, vehicles:"", vehicleName: "", speed:"", cargo: ""}
  }

 componentDidMount() {
    let randomPage= Math.floor(Math.random()*9) + 1 // this is a random number to choose one page of the API, there 9 in total
    fetch('https://swapi.co/api/people/?page=' + randomPage)// API peticion for the player
      .then(results => {
        return results.json();
       })
      .then(data => {
        let ourArray = data.results.length // Total number of players we get from the Api
        let playerIndex = Math.floor(Math.random()*ourArray)// to choose a random player
        let lenghtArrVehicles= data.results[playerIndex].vehicles.length
        let vehicleIndex = Math.floor(Math.random()*lenghtArrVehicles)
        this.setState({ 
          name: data.results[playerIndex].name, 
          id: playerIndex,
          vehicles: data.results[playerIndex].vehicles[vehicleIndex]
        })

     const urlVehicles=this.state.vehicles
     
     fetch(urlVehicles) //API peticion for the vehicle
    .then(results => {
      return results.json();
      })
     .catch(error => {
       console.log('Is afucking error');
     })
    .then(data => {
      this.setState({
        vehicleName: data.name,
        speed: data.max_atmosphering_speed,
        cargo: data.cargo_capacity
      })
  })
 })
}


  render(){
    return (
      <div >
        <h2 style={{color:"#2196F3", margin: 0}}>Player 1</h2>
        <h2 style={{color:"white", margin: 0, fontWeight:400}}>{this.state.name}</h2>
        <h4 style={{color:"white", margin: 0, fontWeight:400}}>Human</h4>
       <div className="player-one" style={{ position: "relative", left:"9.5%", top: "150%", width:"148%" }}>
         <VehiclePlayerOne vehicleName= {this.state.vehicleName} />
         <DataVehicleOne speed= {this.state.speed} cargo={this.state.cargo}/>
        </div>
      </div>
    )
  }
}


export default PlayerOne;



