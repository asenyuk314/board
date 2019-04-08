import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.scss'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  render () {
    const { value, className } = this.props
    const { inputValue } = this.state
    return <textarea
      className={classNames([styles.textarea], [className])}
      rows={8}
      value={value !== undefined ? value : inputValue}
      onChange={(e) => this.onChangeHandler(e)}
    />
  }

  onChangeHandler (e) {
    const { onChange } = this.props
    const { value } = e.target
    if (onChange) {
      return onChange(value)
    }
    return this.setState({ inputValue: value })
  }

  static propTypes = {
    // Значение инпута
    value: PropTypes.string,
    // Функция, выполняющаяся при вводе текста в инпут
    onChange: PropTypes.func,
    // Пользовательский класс
    className: PropTypes.string
  }
}

export default Input
