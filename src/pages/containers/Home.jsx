import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import HomeLayout from '../components/HomeLayout.jsx'
import Categories from '../../categories/components/Categories.jsx'
import Related from '../../related/components/Related.jsx'
import ModalContainer from '../../widgets/containers/ModalContainer.jsx'
import Modal from '../../widgets/components/Modal.jsx'
import HandleError from '../../error/containers/HandleError.jsx'
import VideoPlayer from '../../player/containers/VideoPlayerContainer.jsx'
import { openModal, closeModal } from '../../actions/index'

class Home extends Component {
  // state = {
  //   modalVisible: false,
  // }
  handleOpenModal = (id) => {
    // this.setState({
    //   modalVisible: true,
    //   media
    // })
    console.log(id)
    this.props.dispatch(openModal(id))
  }
  handleCloseModal = (event) => {
    // this.setState({
    //   modalVisible: false,
    // })
    this.props.dispatch(closeModal())
  }
  render () {
   // console.log(this.props.modal.get('visibility'))
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
            this.props.modal.get('visibility') && <ModalContainer>
                                          <div className="modal-overlay">
                                            <Modal
                                              handleClick = { this.handleCloseModal }
                                            >
                                              <VideoPlayer
                                                autoplay
                                                mediaId={this.props.modal.get('mediaId')}
                                                //src={this.state.media.src}
                                                //title={this.state.media.title}
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
  console.log(state.get('modal'))

  const categories = state.getIn(['data', 'categories']).map((categoryId) => {
    return state.getIn(['data', 'entities', 'categories', categoryId])
  })

  let searchResults = list()

  const search = state.get('data').get('search')

  if (typeof(search) === 'string' && search !== '') {
    const mediaList = state.get('data').get('entities').get('media');
		searchResults = mediaList.filter((item) => {
			if (item.get('author').toLowerCase().includes(search.toLowerCase()) || item.get('title').toLowerCase().includes(search.toLowerCase())){
				return true
			}
		}).toList();
  }

  return {
    categories,
    search: searchResults,
    modal: state.get('modal')
  }
}

export default connect(mapStateToProps)(Home)
