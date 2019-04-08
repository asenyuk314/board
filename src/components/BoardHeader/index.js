import React, { Component } from 'react'

import styles from './styles.module.scss'

class BoardHeader extends Component {
  render () {
    const { boardName } = this.props
    return (
      <div className={styles.boardHeader}>
        <div className={styles.boardName}>
          {boardName}
        </div>
        Добро пожаловать! <s>Снова</s>
      </div>
    )
  }
}

export default BoardHeader
