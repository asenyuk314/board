import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

class Card extends Component {
  render () {
    const { children, className } = this.props
    return (
      <div className={classNames([styles.card], [className])}>
        {children}
      </div>
    )
  }
}

export default Card
