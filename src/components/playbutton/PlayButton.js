import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class PlayButton extends React.Component{
  render(){
    return (
      <div styleName="Play">
        <button onClick={this.props.clickHandler} >Play</button>
      </div>
    )
  }
}

export default CSSModules(PlayButton, styles)