import React, { Component } from 'react'

import Button from 'components/Button'

class ThreadPreview extends Component {
  render () {
    const { id, boardId, posts } = this.props
    const opText = posts[0].text
    return (
      <div>
        <div>
          #{id}
          <Button
            goTo={`/${boardId}/${id}`}>
            Открыть
          </Button>
        </div>
        <div>
          {opText}
        </div>
      </div>
    )
  }
}

export default ThreadPreview
