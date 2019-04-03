import React, { Component } from 'react'

import Button from 'components/Button'

class NotFound extends Component {
  render () {
    return (
      <div>
        NotFound
        <Button
          goTo='/'>
          На главную
        </Button>
      </div>
    )
  }
}

export default NotFound
