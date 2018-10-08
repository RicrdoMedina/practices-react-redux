import React from 'react'
import { render } from 'react-dom'
import Media from './src/playlist/components/media'

const app = document.getElementById('app')
render(
        <Media
          type="video"
          title="Responsive design"
          autor="LeonidasEsteban"
          image="./images/covers/bitcoin.jpg"
        />,
        app
      )
