import React, { Component } from 'react'

import Button from 'components/Button'
import Input from 'components/Input'

class CreationForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      inputValue: ''
    }
  }

  render () {
    const { sign } = this.props
    const { active, inputValue } = this.state
    if (!active) {
      return (
        <Button
          onClick={() => this.setState({ active: true })}>
          {sign}
        </Button>
      )
    }

    return (
      <div>
        <Button
          onClick={() => this.setState({ active: false, inputValue: '' })}>
          Закрыть форму
        </Button>
        <Input
          value={inputValue}
          onChange={(value) => this.setState({ inputValue: value })}
        />
        <Button
          onClick={() => this.onCreateBtnClick()}
          disabled={inputValue.trim().length === 0}>
          {sign}
        </Button>
      </div>
    )
  }

  onCreateBtnClick () {
    const { createAction, boardId, threadId } = this.props
    const { inputValue } = this.state
    createAction(inputValue, boardId, threadId)
    this.setState({
      inputValue: '',
      active: false
    })
  }
}

export default CreationForm
