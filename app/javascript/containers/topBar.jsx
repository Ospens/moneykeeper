import { connect } from 'react-redux'
import TableTitle from '../components/tableTitle'
import { fetchTableData } from '../actions/table'

const mapStateToProps = state =>
  ({
    title: state.table.tableTitle
  })

export default connect(
  mapStateToProps,
  { fetchTableData }
)(TableTitle)
