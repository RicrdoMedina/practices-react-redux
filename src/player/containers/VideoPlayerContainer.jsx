import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout.jsx'
import Video from '../components/Video.jsx'
import Title from '../components/Title.jsx'

class VideoPlayer extends Component {
  render () {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video"
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
