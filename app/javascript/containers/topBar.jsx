import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableTitle from '../components/tableTitle'
import { fetchTableData } from '../actions/table'

class TopBar extends Component {

  componentWillMount() {
    this.props.fetchTableData()
  }

  render() {
    return <TableTitle title={this.props.table.tableTitle} />
  }
}

export default connect(
  (state) => ({ table: state.table }),
  { fetchTableData }
)(TopBar)
