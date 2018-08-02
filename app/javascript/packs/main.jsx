
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' 
import mainStore from '../stores/mainStore'
import TopBar from '../containers/topBar'
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

const App = () => {
  return (
    <div className="app">
      <TopBar />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={mainStore}>
      <App />
    </Provider>,
    document.getElementById('app'),
  )
})
