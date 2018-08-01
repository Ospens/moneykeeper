import React, { Component } from 'react'

export default class TableTitle extends Component {

  componentWillMount() {
    this.props.fetchTableData()
  }

  render() {
    return <h3>Table: {this.props.title}</h3>
  }
}