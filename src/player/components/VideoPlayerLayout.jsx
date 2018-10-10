import React from 'react'
import './video-player.css'

export default function VideoPlayerLayout (props) {
  return (
    <div
      className="VideoPlayerLayout"
      ref = { props.setRef }
    >
      {props.children}
    </div>
  )
}