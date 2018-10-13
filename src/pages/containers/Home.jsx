import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeLayout from '../components/HomeLayout.jsx'
import Categories from '../../categories/components/Categories.jsx'
import Related from '../../related/components/Related.jsx'
import ModalContainer from '../../widgets/containers/ModalContainer.jsx'
import Modal from '../../widgets/components/Modal.jsx'
import HandleError from '../../error/containers/HandleError.jsx'
import VideoPlayer from '../../player/containers/VideoPlayerContainer.jsx'

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render () {
    return (
      <HandleError>
        <HomeLayout>
          <Related/>
          
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.state.modalVisible && <ModalContainer>
                                          <div className="modal-overlay">
                                            <Modal
                                              handleClick = { this.handleCloseModal }
                                            >
                                              <VideoPlayer
                                                autoplay
                                                src={this.state.media.src}
                                                title={this.state.media.title}
                                              />
                                            </Modal>
                                          </div>
                                        </ModalContainer> 
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    categories: state.data.categories,
    search: state.search
  }
}

export default connect(mapStateToProps)(Home)
