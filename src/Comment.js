// add Comment component here
import React, { Component } from 'react';
import ColorBox from './ColorBox';

export default class Comment extends Component {
  render(){
      return(
          <div className="comment">
              {this.props.commentText}
          </div>
      ) 
  }
      
  
}

