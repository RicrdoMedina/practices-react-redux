import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout.jsx'
import Video from '../components/Video.jsx'
import Title from '../components/Title.jsx'
import PlayPause from '../components/PlayPause.jsx'

class VideoPlayer extends Component {
  state = {
    pause: true,
  }
  togglePlay = (event) => {
    //actualizar el estado con un arrow function o una funcion normal para evitar posibles inconvenientes
    
    // this.setState({
    //   pause: !this.state.pause
    // })
    // Correcto
    this.setState(prevState => ({
      pause: !prevState.pause	
    }))
  }
  render () {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video"
        />
        <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Video
          autoplay = {true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
