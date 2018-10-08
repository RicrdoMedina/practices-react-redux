import React, { Component } from 'react'
import Media from './media'
import './playlist.css'

class Playlist extends Component {
  render () {
    console.log(this.props)
    const { title, description, playlist } = this.props
    return (
      <div className="Playlist">
        <h3 className = "Playlist-descripcion">{description}</h3>
				<h1 className = "Playlist-titulo">{title}</h1>
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    )
  }
}

export default Playlist