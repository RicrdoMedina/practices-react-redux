import React, { Component } from 'react'
import './media.css'

class Media extends Component {
  render () {
    const { title, autor, image } = this.props
    return (
      <div className="Media">
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

export default Media