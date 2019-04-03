import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from 'components/Button'

class Navigation extends Component {
  render () {
    const { boardsList } = this.props
    return (
      <div>
        {boardsList.map(({ id, name }) =>
          <Button
            key={`linkTo${id}`}
            goTo={`/${id}`}>
            {`/${name}/`}
          </Button>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  boardsList: state.boards.boardsList
})

export default connect(mapStateToProps)(Navigation)
