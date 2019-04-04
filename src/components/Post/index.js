import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from 'components/Card'
import Button from 'components/Button'
import styles from './styles.module.scss'

class Post extends Component {
  render () {
    const { text } = this.props
    return (
      <div className={styles.post}>
        <Card>
          {this.renderHeader()}
          <div className={styles.text}>
            {text}
          </div>
        </Card>
      </div>
    )
  }

  renderHeader () {
    const { id, boardId } = this.props
    if (boardId) {
      return (
        <div className={styles.header}>
          {`#${id}`}
          <Button
            goTo={`/${boardId}/${id}`}>
            Открыть
          </Button>
        </div>
      )
    }

    return (
      <div className={styles.header}>
        {`#${id}`}
      </div>
    )
  }

  static propTypes = {
    // Собственно, id поста (id треда совпадает с id его первого поста)
    id: PropTypes.number.isRequired,
    // Собственно, текст поста
    text: PropTypes.string.isRequired,
    // id доски. Если прилетает boardId - отрисовывается шапка для превью треда на доске
    boardId: PropTypes.string
  }
}

export default Post
