import React, { Component } from 'react'
import PropTypes from"prop-types"
import './media.css'

class Media extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     autor: props.autor
  //   }
  //   //this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    autor: 'Leonidas'
  }
  handleClick = (event) => {
    console.log(this.props.title)
    this.setState({
      autor: 'Ricardo Celis'
    })
  }
  render () {
    const { title, autor, image } = this.props
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={image}
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-autor">{this.state.autor}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  autor: PropTypes.string,
  type: PropTypes.oneOf(['video','audio'])
}

export default Media