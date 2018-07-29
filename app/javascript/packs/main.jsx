
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' 
import mainStore from '../stores/mainStore'
import TopBar from '../containers/topBar'

class App extends Component {

  render() {
    return <TopBar />
  }

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={mainStore}>
      <App />
    </Provider>,
    document.getElementById('app'),
  )
})
