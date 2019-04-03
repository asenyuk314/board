import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from 'pages/Main'
import Board from 'pages/Board'
import Thread from 'pages/Thread'
import NotFound from 'pages/NotFound'

class Router extends Component {
  render () {
    const { boardsList } = this.props
    const boardsRoutes = boardsList.map(({ id, name }) => ({
      path: `/${id}`,
      component: <Board boardId={id} boardName={name} />
    }))

    const threads = boardsList.flatMap(({ threads, id }) => {
      return threads.map(thread => {
        thread.boardId = id
        return thread
      })
    })

    const threadsRoutes = threads.map(({ boardId, id }) => ({
      path: `/${boardId}/${id}`,
      component: <Thread boardId={boardId} threadId={id} />
    }))

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          {boardsRoutes.map(({ path, component }) =>
            <Route
              key={`board${path}`}
              exact
              path={path}
              render={() => component}
            />
          )}
          {threadsRoutes.map(({ path, component }) =>
            <Route
              key={`thread${path}`}
              exact
              path={path}
              render={() => component}
            />
          )}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  boardsList: state.boards.boardsList
})

export default connect(mapStateToProps)(Router)
