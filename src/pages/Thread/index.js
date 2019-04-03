import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from 'components/Button'
import Post from 'components/Post'

class Thread extends Component {
  render () {
    const { boardId } = this.props
    return (
      <div>
        <div>
          <Button
            goTo={`/${boardId}`}>
            Назад
          </Button>
        </div>
        {this.renderPosts()}
      </div>
    )
  }

  renderPosts () {
    const { boardsList, boardId, threadId } = this.props
    const posts = boardsList
      .find(({ id }) => id === boardId)
      .threads.find(({ id }) => id === threadId)
      .posts

    return (
      <div>
        {posts.map(item =>
          <Post
            key={`post${item.id}`}
            { ...item }
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  boardsList: state.boards.boardsList
})

export default connect(mapStateToProps)(Thread)
