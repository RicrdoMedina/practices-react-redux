import React, { Component } from 'React'
import Media from '../components/media.jsx'
import { connect } from 'react-redux'

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId: id
      }
    })
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
