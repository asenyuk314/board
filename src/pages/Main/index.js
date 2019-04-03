import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from 'components/Navigation'
import * as actions from 'store/boards/actions'

class Main extends Component {
  componentDidMount () {
    const { getInfo } = this.props
    getInfo()
  }

  render () {
    return (
      <div>
        Main
        <Navigation />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  boardsList: state.boards.boardsList
})

const mapDispatchToProps = {
  getInfo: actions.getInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
