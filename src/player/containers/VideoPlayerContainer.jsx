import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout.jsx'
import Video from '../components/Video.jsx'
import Title from '../components/Title.jsx'
import PlayPause from '../components/PlayPause.jsx'
import Timer from '../components/Timer.jsx'
import Controls from '../components/videoPlayerControls.jsx'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
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
  componentDidMount () {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }
  render () {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video"
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
          />
        </Controls>
        
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          autoplay = {this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
