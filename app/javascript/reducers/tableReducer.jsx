import { SET_TABLE_TITLE } from '../constants/actionTypes'

export default (state = {}, action) => {
  switch(action.type) {
    case SET_TABLE_TITLE:
      return {...state, tableTitle: action.payload}
    default:
      return state
  }
}