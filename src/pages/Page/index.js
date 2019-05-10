import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from 'store/boards/actions'
import Form from 'components/Form'
import Button from 'components/Button'
import Post from 'components/Post'
import Card from 'components/Card'
import Navigation from 'components/Navigation'
import BoardHeader from 'components/BoardHeader'
import ModalImage from 'components/ModalImage'
import styles from './styles.module.scss'

class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formOpen: false,
      postsMargin: 0
    }
  }

  componentDidMount () {
    const postsMargin = this.headerElement.clientHeight + 5
    this.setState({ postsMargin })
  }

  componentWillUpdate (nextProps, nextState) {
    const { navigationOpen }= this.props
    const { formOpen } = this.state
    const { navigationOpen: nextNavigationOpen } = nextProps
    const { formOpen: nextFormOpen } = nextState
    if (formOpen !== nextFormOpen || navigationOpen !== nextNavigationOpen) {
      this.setState({ formOpen: nextFormOpen }, () => {
        const postsMargin = this.headerElement.clientHeight + 5
        this.setState({ postsMargin })
      })
    }
  }

  render () {
    const { boardId, threadId, boardName, hideNavigation, navigationOpen, bigImage } = this.props
    const { formOpen } = this.state
    const sign = boardName ? 'Создать тред' : 'Ответить'
    const path = boardName ? '/' : `/${boardId}`
    const content = boardName ? this.renderThreads() : this.renderPosts()
    return (
      <div className={styles.page}>
        {bigImage && <ModalImage image={bigImage} />}
        <div className={styles.header} ref={el => { this.headerElement = el }}>
          <div className={styles.topDiv} />
          <Card className={styles.card}>
            {boardName && <BoardHeader boardName={boardName} />}
            <div className={styles.buttons}>
              <Button
                goTo={path}>
                Назад
              </Button>
              <Button
                onClick={() => this.setState({ formOpen: !formOpen })}>
                {formOpen ? 'Закрыть форму' : sign}
              </Button>
              <Button
                onClick={() => hideNavigation()}>
                Меню
              </Button>
            </div>
            {navigationOpen && <Navigation />}
            {formOpen && <Form
              boardId={boardId}
              threadId={threadId}
              createAction={(input, files, boardId, threadId) => this.onCreateBtnClick(input, files, boardId, threadId)}
              sign={sign}
            />}
          </Card>
        </div>
        {content}
      </div>
    )
  }

  renderPosts () {
    const { boardsList, boardId, threadId, showModal } = this.props
    const { postsMargin } = this.state
    const posts = boardsList
      .find(({ id }) => id === boardId)
      .threads.find(({ id }) => id === threadId)
      .posts

    return (
      <div style={{ marginTop: `${postsMargin}px` }}>
        {posts.map(item =>
          <Post
            key={`post${item.id}`}
            showModal={(imagePreviewUrl) => showModal(imagePreviewUrl)}
            { ...item }
          />
        )}
      </div>
    )
  }

  renderThreads () {
    const { boardsList, boardId, showModal } = this.props
    const { postsMargin } = this.state
    const threads = boardsList
      .find(({ id }) => id === boardId)
      .threads
    return (
      <div style={{ marginTop: `${postsMargin}px` }}>
        {threads.map(({ id, posts }) =>
          <Post
            key={`threads${id}`}
            boardId={boardId}
            id={id}
            text={posts[0].text}
            files={posts[0].files}
            showModal={(imagePreviewUrl) => showModal(imagePreviewUrl)}
          />
        )}
      </div>
    )
  }

  onCreateBtnClick (input, files, boardId, threadId) {
    const { createPost, createThread, boardName } = this.props
    this.setState({ formOpen: false })
    if (boardName) {
      return createThread(input, files, boardId)
    }
    return createPost(input, files, boardId, threadId)
  }
}

const mapStateToProps = (state) => ({
  boardsList: state.boards.boardsList,
  navigationOpen: state.boards.navigationOpen,
  bigImage: state.boards.bigImage
})

const mapDispatchToProps = {
  createPost: actions.createPost,
  createThread: actions.createThread,
  hideNavigation: actions.hideNavigation,
  showModal: actions.showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
