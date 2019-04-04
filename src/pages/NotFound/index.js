import React, { Component } from 'react'

import Card from 'components/Card'
import Button from 'components/Button'

class NotFound extends Component {
  render () {
    return (
      <div>
        <Card>
          NotFound
          <Button
            goTo='/'>
            На главную
          </Button>
        </Card>
      </div>
    )
  }
}

export default NotFound
