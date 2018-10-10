import React, { Component } from 'react'
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
  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
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
          <VideoPlayer
            autoplay
          />
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible && <ModalContainer>
                                          <Modal
                                            handleClick = { this.handleCloseModal }
                                          >
                                            <h1>Esto es un portal</h1>
                                          </Modal>
                                        </ModalContainer> 
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
