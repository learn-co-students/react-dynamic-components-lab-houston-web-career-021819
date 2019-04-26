import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  //use if, else statement to render ColorBox recursively.
  render() {
        return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          {
            this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null
          }
        </div>
        )
  }
  
}
