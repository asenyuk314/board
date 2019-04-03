import React, { Component } from 'react'
import { connect } from 'react-redux'

import ThreadCreator from 'components/ThreadCreator'
import ThreadPreview from 'components/ThreadPreview'
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
        <ThreadCreator
          boardId={boardId}
          createThread={createThread}
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
        {threads.map(item =>
          <ThreadPreview
            key={`threads${item.id}`}
            boardId={boardId}
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
  createThread: actions.createThread
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
