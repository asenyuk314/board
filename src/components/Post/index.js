import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown/with-html'

import Card from 'components/Card'
import Button from 'components/Button'
import ImagesPreview from 'components/ImagesPreview'
import styles from './styles.module.scss'

class Post extends Component {
  render () {
    const { text, files, showModal } = this.props
    return (
      <Card className={styles.post}>
        {this.renderHeader()}
          <ImagesPreview files={files} onClick={showModal} />
          <ReactMarkdown
            className={classNames(
              [styles.text],
              { [styles.textNotEmpty]: text.length > 0 }
            )}
            source={text}
          />
      </Card>
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
    // id доски. Если прилетает boardId - отрисовывается шапка для превью треда на доске,
    boardId: PropTypes.string,
    // Массив картинок, прикрепленных к посту
    files: PropTypes.array
  }
}

export default Post
