import React, { Component } from 'react';
// import Comment from '../src/Comment.js'
// import BlogPost from '../src/BlogPost'

export default class Comment extends Component {
    render () {
    return (
        <div className='comment'>
          <p>  {this.props.commentText}</p>
    
        </div>
    )
}
}
