import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showModal } from 'store/boards/actions'
import styles from './styles.module.scss'

class ModalImage extends Component {
  render () {
    const { image, showModal } = this.props
    return (
      <div
        className={styles.modalImage}
        onClick={() => showModal(null)}
      >
        <div className={styles.background} />
        <img
          className={styles.image}
          src={image}
          alt='Изображение'
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  showModal
}

export default connect(null, mapDispatchToProps)(ModalImage)
