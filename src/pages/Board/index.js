import React, { Component } from 'react'
import { connect } from 'react-redux'

import CreationForm from 'components/CreationForm'
import Post from 'components/Post'
import * as actions from 'store/boards/actions'

class Board extends Component {
  render () {
    const { boardName, createThread, boardId } = this.props
    return (
      <div>
        <div>
          <b>{boardName}</b>
        </div>
        <div>
          Добро пожаловать! <s>Снова</s>
        </div>
        <CreationForm
          boardId={boardId}
          createAction={createThread}
          sign='Создать тред'
        />
        {this.renderThreads()}
      </div>
    )
  }

  renderThreads () {
    const { boardsList, boardId } = this.props
    const threads = boardsList
      .find(({ id }) => id === boardId)
      .threads
    return (
      <div>
        {threads.map(({ id, posts }) =>
          <Post
            key={`threads${id}`}
            boardId={boardId}
            id={id}
            text={posts[0].text}
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
  createThread: actions.createThread
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
