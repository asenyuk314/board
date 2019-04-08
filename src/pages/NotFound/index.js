import React, { Component } from 'react'
import classNames from 'classnames'

import pageNotFounf from 'resources/images/pageNotFounf.jpg'
import Card from 'components/Card'
import Button from 'components/Button'
import styles from './styles.module.scss'

class NotFound extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageSpinning: false
    }
  }

  render () {
    const { imageSpinning } = this.state
    return (
      <Card className={styles.notFound}>
        <img
          className={classNames([styles.image],
            { [styles.imageSpinning]: imageSpinning }
          )}
          src={pageNotFounf}
          alt='Page not found'
          onClick={() => this.spinImage()}
        />
        <Button className={styles.homeButton} goTo='/'>
          На главную
        </Button>
      </Card>
    )
  }

  spinImage () {
    const { imageSpinning } = this.state
    if (!imageSpinning) {
      this.setState({ imageSpinning: true })
      setTimeout(() => {
        this.setState({ imageSpinning: false })
      }, 2000)
    }
  }
}

export default NotFound
