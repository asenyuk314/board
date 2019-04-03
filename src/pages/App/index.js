import React, { Component } from 'react'

import Router from 'components/Router'
import styles from './styles.module.scss'

class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        <Router />
      </div>
    )
  }
}

export default App
