import React from 'react'
import { render } from 'react-dom'
import Categories from './src/playlist/components/categories'
import data from './src/api.json'

const app = document.getElementById('app')
render(
        <Categories data={data}/>,
        app
      )
