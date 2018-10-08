import React, { Component } from 'react'
import PropTypes from"prop-types"
import './media.css'

class Media extends Component {
  // constructor (props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }
  handleClick = (event) => {
    console.log(this.props.title)
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
          <p className="Media-autor">{autor}</p>
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