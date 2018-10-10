import React from 'react'
import './video-player.css'

export default function VideoPlayerLayout (props) {
  return (
    <div className="VideoPlayerLayout">
      {props.children}
    </div>
  )
}