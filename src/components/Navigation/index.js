import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from 'components/Button'
import styles from './styles.module.scss'

class Navigation extends Component {
  render () {
    const { boardsList } = this.props
    return (
      <div className={styles.navigation}>
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
