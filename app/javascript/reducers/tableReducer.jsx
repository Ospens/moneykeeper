import { SET_TABLE_TITLE } from '../constants/actionTypes'

const initState = {
  tableTitle: 'table title'
}

export default (state = initState, action) => {
  switch(action.type) {
    case SET_TABLE_TITLE:
      return {...state, tableTitle: action.payload}
    default:
      return state
  }
}