import React from 'react';
import styles from './styles.css';

class PlayButton extends React.Component{
  render(){
    return (
      <div className="Play" style= {styles}>
        <button onClick={this.props.clickHandler} >Play</button>
      </div>
    )
  }
}

export default PlayButton;
