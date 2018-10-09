import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/Home.jsx'
import data from '../api.json'

const app = document.getElementById('app')
render(
        <Home data={data}/>,
        app
      )
