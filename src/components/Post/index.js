import React, { Component } from 'react'

class Post extends Component {
  render () {
    const { id, text } = this.props
    return (
      <div>
        <div>
          #{id}
        </div>
        <div>
          {text}
        </div>
      </div>
    )
  }
}

export default Post
