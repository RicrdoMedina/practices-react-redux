import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Map as map } from 'immutable';
import reducer from '../reducers/index'
import Home from '../pages/containers/Home.jsx'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import data from '../api.json'
// import data from '../schemas/index.js'

// const initialState = {
//   data: {
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   modal:{
//     visibility: false,
//     mediaId: null,
//   }
// }

function logger_ ({getState, dispatch}) {
  return (next) => {
    return (action) => {
      console.log('Vamos a enviar esta accion', action)
      console.log('este es mi estado anterior', getState().toJS())
      const value = next(action)
      console.log('este es mi nuevo estado', getState().toJS())
      return value
    }
  }
}

const store = createStore(
                reducer,
                map(),
                composeWithDevTools(
                  applyMiddleware(logger, thunk)
                )
                //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
              )

const app = document.getElementById('app')

render(
      <Provider store={store}>
        <Home/>
      </Provider>,
        app
      )
