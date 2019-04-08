import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

class ImagesPreview extends Component {
  render () {
    const { files } = this.props
    return (
      <div className={classNames(
        [styles.imagesPreview],
        { [styles.imagesPreviewNotEmpty]: files.length > 0 }  
      )}>
        {files.map(({ file, imagePreviewUrl }, index) =>
          <img
            key={`img${index}`}
            className={styles.image}
            src={imagePreviewUrl}
            alt={`${file.lastModified}`}
          />
        )}
      </div>
    )
  }
}

export default ImagesPreview
