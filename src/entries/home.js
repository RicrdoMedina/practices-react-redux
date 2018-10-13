import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from '../pages/containers/Home.jsx'
import data from '../api.json'

const initialState = {
  data: {
    ...data
  }
}

const store = createStore(
                (state) => state,
                initialState,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
              )

const app = document.getElementById('app')

render(
      <Provider store={store}>
        <Home/>
      </Provider>,
        app
      )
