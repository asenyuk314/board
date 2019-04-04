import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import * as actions from 'store/boards/actions'
import cross from 'resources/images/cross.svg'
import Button from 'components/Button'
import styles from './styles.module.scss'

class Navigation extends Component {
  render () {
    const { boardsList, navigationHidden, alwaysShown, hideNavigation } = this.props
    return (
      <div className={styles.navigation}>
        {!alwaysShown && <div className={styles.cross}>
          <img
            className={styles.img}
            src={cross}
            alt='крестик (нет, ну а что ещё?)'
            onClick={() => hideNavigation()}
          />
        </div>}
        <div className={classNames(
          [styles.catalog],
          { [styles.hidden]: navigationHidden && !alwaysShown }
        )}>
          <Button
            goTo='/'>
            Главная
          </Button>
          {boardsList.map(({ id, name }) =>
            <Button
              key={`linkTo${id}`}
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
  boardsList: state.boards.boardsList,
  navigationHidden: state.boards.navigationHidden
})

const mapDispatchToProps = {
  hideNavigation: actions.hideNavigation
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
