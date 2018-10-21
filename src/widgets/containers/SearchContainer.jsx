import React, { Component } from 'react'
import Search from '../components/Search.jsx';
import { connect } from 'react-redux'
import { searchAsyncEntities } from '../../actions/index'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log('submit')
    console.log(this.input.value)
    this.props.searchAsyncEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ','-')
    })
  }
  render () {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

const mapDispatchToProps = {
	searchAsyncEntities
}

export default connect(null, mapDispatchToProps)(SearchContainer)
