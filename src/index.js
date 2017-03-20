import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PageWrapper from './PageWrapper'
import rootReducer from './rootReducer'
import './app.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <PageWrapper />
  </Provider>,
  document.getElementById('root')
)
