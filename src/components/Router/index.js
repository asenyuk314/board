import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from 'pages/Main'
import Board from 'pages/Board'
import Thread from 'pages/Thread'
import NotFound from 'pages/NotFound'

class Router extends Component {
  render () {
    const routes = this.createRoutes()
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          {routes.map(({ path, component }) =>
            <Route
              key={`page${path}`}
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

  createRoutes () {
    const { boardsList } = this.props
    return boardsList
      .flatMap(({ id: boardId, name, threads }) => [
        {
          path: `/${boardId}`,
          component: <Board boardId={boardId} boardName={name} />
        },
        threads.map(({ id: threadId }) => ({
          path: `/${boardId}/${threadId}`,
          component: <Thread boardId={boardId} threadId={threadId} />
        }))
      ])
      .flat()
  }
}

const mapStateToProps = (state) => ({
  boardsList: state.boards.boardsList
})

export default connect(mapStateToProps)(Router)
