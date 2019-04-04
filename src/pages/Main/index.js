import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from 'components/Card'
import Navigation from 'components/Navigation'
import * as actions from 'store/boards/actions'
import styles from './styles.module.scss'

class Main extends Component {
  componentDidMount () {
    const { getInfo } = this.props
    getInfo()
  }

  render () {
    return (
      <div className={styles.main}>
        <Card className={styles.card}>
          <div className={styles.header}>
            Реакт.ч
          </div>
          <div className={styles.subheader}>
            Добро пожаловать! <s>Снова</s>
          </div>
          <Navigation alwaysShown />
        </Card>
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
