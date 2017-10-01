/**
** add immutable support for redux-persist-migrate
** https://github.com/wildlifela/redux-persist-migrate
**/

import { REHYDRATE } from 'redux-persist/constants'
import Immutable from 'immutable'

const processKey = (key) => {
  const int = parseInt(key, 10)
  if (isNaN(int)) throw new Error('redux-persist-migrate: migrations must be keyed with integer values')
  return int
}

const isKeyValid = (key) => {
  if (['undefined', 'object'].indexOf(typeof key) === -1) {
    console.error('redux-persist-migrate: state for versionSetter key must be an object or undefined')
    return false
  }
  return true
}

const getVersionSelector = (reducerKey) => {
  return (state) => {
    let reduced = null
    if (Immutable.Map.isMap(state)) {
      reduced = state.get(reducerKey, null)
    } else {
      reduced = state[reducerKey]
    }
    if (!reduced) {
      return null
    } else if (Immutable.Map.isMap(reduced)) {
      return reduced.get('version')
    }
    return reduced.version
  }
}

const getVersionSetter = (reducerKey) => {
  return (state, version) => {
    let reduced = Immutable.Map.isMap(state) ? state.get(reducerKey) : state[reducerKey]
    if (!isKeyValid(reduced)) {
      return state
    }
    if (Immutable.Map.isMap(reduced)) {
      reduced = reduced.set('version', version)
    } else {
      reduced = {...reduced, version: version}
    }
    if (Immutable.Map.isMap(state)) {
      return state.set(reducerKey, reduced)
    }
    return {
      ...state,
      [reducerKey]: reduced
    }
  }
}

export function createMigration (manifest, versionSelector, versionSetter) {
  if (typeof versionSelector === 'string') {
    const reducerKey = versionSelector
    versionSelector = getVersionSelector(reducerKey)
    versionSetter = getVersionSetter(reducerKey)
  }

  const versionKeys = Object.keys(manifest).map(processKey).sort((a, b) => a - b)
  let currentVersion = versionKeys[versionKeys.length - 1]
  if (!currentVersion) currentVersion = -1

  const migrate = (state, version) => {
    if (version != null) {
      versionKeys
        .filter((v) => v > version)
        .forEach((v) => {
          state = manifest[v](state)
        })
    }
    state = versionSetter(state, currentVersion)
    return state
  }

  const migrationDispatch = (next) => (action) => {
    if (action.type === REHYDRATE) {
      const incomingState = action.payload
      let incomingVersion = parseInt(versionSelector(incomingState), 10)
      if (isNaN(incomingVersion)) incomingVersion = null

      if (incomingVersion !== currentVersion) {
        const migratedState = migrate(incomingState, incomingVersion)
        action.payload = migratedState
      }
    }
    return next(action)
  }

  return (next) => (reducer, initialState, enhancer) => {
    const store = next(reducer, initialState, enhancer)
    return {
      ...store,
      dispatch: migrationDispatch(store.dispatch)
    }
  }
}
