import React, { Component } from 'react';

class PlayerTwo extends Component {
//   constructor(props){
//     super(props);
//     this.state = {name:[], id: 0, vehicles:[]}
//   }

//     componentDidMount() {
//     fetch('https://swapi.co/api/people/')
//       .then(results => {
//         return results.json();
//       }).then(data => {
//           let ourArray = data.results.length // Total number of players we get from the Api
//           this.setState({ 
//             name: data.results[Math.floor(Math.random()*ourArray)].name
//           })
//  })
// }

  render(){
    return (
      <div >
        <h2 style={{color:"#EE4235", margin: 0}}>Player 2</h2>
        <h2 style={{color:"white", margin: 0, fontWeight:400}}>{this.props.nameTwo.name}</h2>
        <h4 style={{color:"white", margin: 0, fontWeight:400}}>Human</h4>
      </div>
    )
  }
}

export default PlayerTwo;
