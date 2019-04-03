import React, { Component } from 'react'

import Button from 'components/Button'
import Input from 'components/Input'

class ThreadCreator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      inputValue: ''
    }
  }

  render () {
    const { boardId, createThread } = this.props
    const { active, inputValue } = this.state
    if (!active) {
      return (
        <Button
          onClick={() => this.setState({ active: true })}>
          Создать тред
        </Button>
      )
    }

    return (
      <div>
        <Button
          onClick={() => this.setState({ active: false })}>
          Закрыть форму
        </Button>
        <Input
          value={inputValue}
          onChange={(value) => this.setState({ inputValue: value })}
        />
        <Button
          disabled>
          Создать
        </Button>
      </div>
    )
  }
}

export default ThreadCreator
