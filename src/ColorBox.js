import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    let thisOpacity = parseFloat(this.props.opacity);
    let nextOpacity = thisOpacity - 0.1;
    console.log(thisOpacity);
    if (nextOpacity > 0.1) {
      return (
        <div className="color-box" style={{ opacity: thisOpacity }}>
          <ColorBox opacity={nextOpacity} />
        </div>
      );
    } else {
      return null;
    }
  }
}
