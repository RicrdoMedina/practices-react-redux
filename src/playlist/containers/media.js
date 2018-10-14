import React, { Component } from 'React'
import Media from '../components/media.jsx'
import { connect } from 'react-redux'
import { openModal } from '../../actions/index'

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.dispatch(openModal(id))
  }
  render () {
   // console.log(this.props.data)
    
   return <Media openModal={this.openModal} {...this.props.data.toJS()}/>
  }
}

function mapStateToProps (state, props) {
  return {
    data: state.getIn(['data', 'entities', 'media', props.id])
  }
}

export default connect(mapStateToProps)(MediaContainer)
