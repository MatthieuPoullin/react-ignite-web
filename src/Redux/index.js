import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/*
  if redux-persist is activated:
  keys you want to purge when reducerVersion is changed
*/
export const storeKeyToPurge = [
  'friends'
]

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    router: routerReducer,
    migration: require('./MigrationRedux').reducer,
    friends: require('./FriendsRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
