import React, { Component } from 'react'

import Button from 'components/Button'
import Input from 'components/Input'
import ImagesPreview from 'components/ImagesPreview'
import styles from './styles.module.scss'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      files: []
    }
  }

  render () {
    const { sign } = this.props
    const { inputValue, files } = this.state
    return (
      <div className={styles.form}>
        <input
          className={styles.filesInput}
          type='file'
          onChange={e => this.onFileAdd(e)}
          disabled={files.length > 3}
        />
        <ImagesPreview files={files} onClick={file => this.removeFile(file)}/>
        <Input
          className={styles.input}
          value={inputValue}
          onChange={(value) => this.setState({ inputValue: value })}
        />
        <Button
          onClick={() => this.onCreateBtnClick()}
          disabled={inputValue.trim().length === 0 && files.length === 0}>
          {sign}
        </Button>
      </div>
    )
  }

  onCreateBtnClick () {
    const { createAction, boardId, threadId } = this.props
    const { inputValue, files } = this.state
    createAction(inputValue, files, boardId, threadId)
    this.setState({
      inputValue: '',
      files: [],
      active: false
    })
  }

  onFileAdd (e) {
    const { files } = this.state
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onloadend = () => {
      let nextFiles = files
        nextFiles.push({
          file: file,
          imagePreviewUrl: reader.result
      })
      this.setState({
        files: nextFiles
      })
    }
    file && reader.readAsDataURL(file)
  }

  removeFile (file) {
    const { files } = this.state
    const updatedFiles = files.filter(({ imagePreviewUrl }) => file !== imagePreviewUrl)
    this.setState({ files: updatedFiles })
  }
}

export default Form
