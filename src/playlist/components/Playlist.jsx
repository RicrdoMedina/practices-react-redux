import React from 'react'
import MediaContainer from '../containers/media'
import './playlist.css'

function Playlist (props) {
  const { title, description, playlist } = props

  return (
    <div className="Playlist">
      <h3 className = "Playlist-descripcion">{description}</h3>
			<h1 className = "Playlist-titulo">{title}</h1>
      {
        playlist.map((mediaId) => {
          return <MediaContainer
                  key={mediaId}
                  id={mediaId}
                  openModal={props.handleOpenModal}
                  />
        })
      }
    </div>
  )
}

export default Playlist

// class Playlist extends Component {
//   render () {
//     console.log(this.props)
//     const { title, description, playlist } = this.props
//     return (
//       <div className="Playlist">
//         <h3 className = "Playlist-descripcion">{description}</h3>
// 				<h1 className = "Playlist-titulo">{title}</h1>
//         {
//           playlist.map((item) => {
//             return <Media {...item} key={item.id}/>
//           })
//         }
//       </div>
//     )
//   }
// }