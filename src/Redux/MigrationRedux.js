import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  version: null
})

export const AppTypes = Types
export default Creators

// version used for redux migration
export const INITIAL_STATE = Immutable({
  version: -1
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.VERSION]: (state) => { return state }
})
