import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from 'components/Button'
import styles from './styles.module.scss'

class Navigation extends Component {
  render () {
    const { boardsList } = this.props
    return (
      <div className={styles.navigation}>
        <div className={styles.catalog}>
          <Button
            className={styles.navButtom}
            goTo='/'>
            Главная
          </Button>
          {boardsList.map(({ id, name }) =>
            <Button
              key={`linkTo${id}`}
              className={styles.navButtom}
              goTo={`/${id}`}>
              {`/${name}/`}
            </Button>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  boardsList: state.boards.boardsList
})

export default connect(mapStateToProps)(Navigation)
