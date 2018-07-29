import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableTitle from '../components/tableTitle'

class TopBar extends Component {
  render() {
    return <TableTitle title={this.props.table.tableTitle} />
  }
}

export default connect(
  (state) => ({ table: state.table })
)(TopBar)
