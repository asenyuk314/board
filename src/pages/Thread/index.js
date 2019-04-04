import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from 'store/boards/actions'
import CreationForm from 'components/CreationForm'
import Button from 'components/Button'
import Post from 'components/Post'
import Card from 'components/Card'
import Navigation from 'components/Navigation'

class Thread extends Component {
  render () {
    const { boardId, threadId, createPost } = this.props
    return (
      <div>
        <Card>
          <Navigation />
          <div>
            <Button
              goTo={`/${boardId}`}>
              Назад
            </Button>
          </div>
          <CreationForm
            boardId={boardId}
            threadId={threadId}
            createAction={createPost}
            sign='Ответить'
          />
        </Card>
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

const mapDispatchToProps = {
  createPost: actions.createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Thread)
