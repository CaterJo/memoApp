  
import { combineReducers } from 'redux';
import memo, { MemoState } from './memo'
import app, {AppState} from './app'
import { connectRouter } from 'connected-react-router'

export interface RootState {
  memo: MemoState
  app : AppState
}

// const rootReducer = combineReducers({
//   memo,
//   app
// })

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  memo,
  app
  // ... // rest of your reducers
})


export default createRootReducer