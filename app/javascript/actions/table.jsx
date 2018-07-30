import { tableData } from '../services/fetchers'
import { SET_TABLE_TITLE } from '../constants/actionTypes'

export const setTableTitle = (title) => ({
  type: SET_TABLE_TITLE,
  payload: title
})

export const fetchTableData = () => {
  return (dispatch) => {
    tableData()
      .then(res => dispatch(setTableTitle(res.table.title)))
  }
}