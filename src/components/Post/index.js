import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

class Post extends Component {
  render () {
    const { text } = this.props
    return (
      <div>
        {this.renderHeader()}
        <div>
          {text}
        </div>
      </div>
    )
  }

  renderHeader () {
    const { id, boardId } = this.props
    if (boardId) {
      return (
        <div>
          #{id}
          <Button
            goTo={`/${boardId}/${id}`}>
            Открыть
          </Button>
        </div>
      )
    }

    return (
      <div>
        #{id}
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
