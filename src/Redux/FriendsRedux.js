import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  friendsRequest: null,
  friendsSuccess: ['payload'],
  friendsFailure: ['error'],
  friendsAdd: ['key'],
  friendsRemove: ['key']
})

export const FriendsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: true,
  error: null,
  payload: [],
  userFriends: [{id: 1, 'name': 'Matthieu'}]
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload: payload })
}

// Something went wrong somewhere.
export const failure = state => state.merge({ fetching: false, error: true })

export const add = (state, { key }) => {
  return state.merge({ userFriends: state.userFriends.concat(key) })
}
export const remove = (state, { key }) => {
  let index = state.userFriends.indexOf(key)
  return state.merge({ userFriends: state.userFriends.slice(0, index).concat(state.userFriends.slice(index + 1)) })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FRIENDS_REQUEST]: request,
  [Types.FRIENDS_SUCCESS]: success,
  [Types.FRIENDS_FAILURE]: failure,
  [Types.FRIENDS_ADD]: add,
  [Types.FRIENDS_REMOVE]: remove
})
