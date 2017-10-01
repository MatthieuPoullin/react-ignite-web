
If you need to create a migration (add an entry to a persisted data), you can add it here.
Your data must be Immutable.
Please match reducerVersion
ex:
const manifest = {
    1: (state) => (state),
    2: (state) => ({...state, hello: Immutable({...state.hello, data: []})})
}


## Redux Persist Migrate

Migrate redux state between versions with redux-persist.

See reducerVersion from Config/ReduxPersist and please update history

#### Usage
```js
// In this example after migrations run, `state.migration.version` will equal `2`

// This is a list of changes to make to the state being rehydrated.
// The keys must be integers, and migrations will be performed in ascending key order.
// Note: blacklisted reducers will not be present in this state.
const manifest = {
    1: (state) => (state),
    2: (state) => ({...state, hello: Immutable({...state.hello, data: []})})
}
```