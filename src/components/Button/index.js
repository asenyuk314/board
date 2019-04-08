import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import styles from './styles.module.scss'

class Button extends Component {
  render () {
    const { children, onClick, goTo, disabled, className } = this.props
    if (disabled) {
      return <div
        className={classNames(
          [styles.button],
          [styles.disabled],
          [className]
        )}>
        {children}
      </div>
    }

    if (goTo) {
      return (
        <div className={classNames([styles.linkButton], [className])}>
          <Link className={styles.link} to={goTo}>
            <div className={styles.button}>
              {children}
            </div>
          </Link>
        </div>
      )
    }

    return (
      <div
        className={classNames(
          [styles.button],
          [className]
        )}
        onClick={onClick}>
        {children}
      </div>
    )
  }

  static propTypes = {
    // То, что отображается в самой кнопке (текст или какой-то элемент)
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    // Функция, выполняющаяся по клику на кнопку
    onClick: PropTypes.func,
    // Если кнопка ведет на другую страницу сайта - используйте goTo, вместо onClick
    // Внутри должен лежать путь к странице, формата '/some-page'
    goTo: PropTypes.string,
    // Если true - подключаются стили неработающей кнопки и отключается onClick
    disabled: PropTypes.bool,
    // Пользовательский класс
    className: PropTypes.string
  }

  static defaultProps = {
    disabled: false
  }
}

export default Button
