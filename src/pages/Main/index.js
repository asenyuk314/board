import React, { Component } from 'react'
import { connect } from 'react-redux'

import programmerChan from 'resources/images/programmerChan.png'
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
      <Card className={styles.main}>
        <div className={styles.header}>
          Реакт.ч
        </div>
        <img className={styles.image} src={programmerChan} alt='Погромист-тян' />
        <div className={styles.subheader}>
          Добро пожаловать! <s>Снова</s>
        </div>
        <Navigation />
      </Card>
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
