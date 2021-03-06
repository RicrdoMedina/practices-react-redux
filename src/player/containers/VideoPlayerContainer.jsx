import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout.jsx'
import Video from '../components/Video.jsx'
import Title from '../components/Title.jsx'
import PlayPause from '../components/PlayPause.jsx'
import Timer from '../components/Timer.jsx'
import Controls from '../components/videoPlayerControls.jsx'
import { formattedTime } from '../../utils/libs'
import ProgressBar from '../components/progressBar.jsx'
import Spinner from '../../utils/components/spinner'
import Volume from '../components/Volume.jsx'
import FullScreen from '../components/fullScreen.jsx';
import { connect } from 'react-redux'

class VideoPlayer extends Component {
  state = {
    pause:  true,
    duration: 0,
    currentTime: 0,
    durationFloat: 0,
    timeFloat: 0,
    loading: true,
    volume: 1,
    lastValue: null,
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
      duration: formattedTime(this.video.duration),
      durationFloat: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    //console.log(this.video.currentTime)
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      timeFloat: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleReady = event => {
    this.setState({
      loading: false,
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  handleVolumeToggle = () => {
    const lastValue = this.video.volume;
    this.setState ({
      lastValue
    })
    if (this.video.volume !== 0) {
      this.video.volume = 0
      this.setState ({
        volume: this.video.volume
      })
    } else {
      this.video.volume = this.state.lastValue
      this.setState ({
        volume: this.video.volume
      })
    }
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({ volume: this.video.volume })
  }
  handleFullScreenClick = event => {
    if (document.mozFullScreen) {
      document.mozCancelFullScreen();
    }
    else if (document.webkitIsFullScreen) {
      document.webkitExitFullscreen();
    }
    else if (this.player.mozRequestFullScreen) {
      this.player.mozRequestFullScreen();
    }
    else if (this.player.webkitRequestFullscreen) {
      this.player.webkitRequestFullscreen(); 
    }
  }
  setRef = element => {
    this.player = element
  }
  render () {
    return (
      <VideoPlayerLayout setRef = { this.setRef }>
        <Title
          title={this.props.media.get('title')}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration = { this.state.durationFloat }
            value = { this.state.timeFloat }
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange = { this.handleVolumeChange }
            handleVolumeToggle = { this.handleVolumeToggle }
            volume = { this.state.volume }
          />
          <FullScreen 
            handleFullScreenClick = { this.handleFullScreenClick }
          />
        </Controls>
        <Spinner 
          active = { this.state.loading }
        />
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          autoplay = {this.props.autoplay}
          pause={this.state.pause}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          handleReady = { this.handleReady }
          src={this.props.media.get('src')}
        />
      </VideoPlayerLayout>
    )
  }
}

function mapStateToProps (state, props) {
  //console.log('props',props)
  return {
    media: state.getIn(['data','entities', 'media', props.mediaId])
  }
}

export default connect(mapStateToProps)(VideoPlayer)
