import { createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import tableReducer from '../reducers/tableReducer'

const rootReducer = combineReducers({
  table: tableReducer
})

const store = createStore(
  rootReducer,
  (localStorage['moneysaver-store']) ?
    JSON.parse(localStorage['moneysaver-store']) :
    {},
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() =>
  localStorage['moneysaver-store'] = JSON.stringify(store.getState())
)

export default store