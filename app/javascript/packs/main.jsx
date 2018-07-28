
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Provider from 'react-redux' 

class App extends Component {

  render() {
    return <h1>Hello </h1>
  }

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  )
})
