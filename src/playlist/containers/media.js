import React, { Component } from 'React'
import Media from '../components/media.jsx'
import { connect } from 'react-redux'

class MediaContainer extends Component {

  render () {
   // console.log(this.props.data)
    
   return <Media {...this.props.data.toJS()}/>
  }
}

function mapStateToProps (state, props) {
  return {
    data: state.getIn(['data', 'entities', 'media', props.id])
  }
}

export default connect(mapStateToProps)(MediaContainer)
