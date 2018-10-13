import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data'
import Home from '../pages/containers/Home.jsx'
// import data from '../api.json'
import data from '../schemas/index.js'

console.log(data)

const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories,
  },
  search: [],
}

const store = createStore(
                reducer,
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
