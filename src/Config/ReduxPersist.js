import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'
import localforage from 'localforage'

/** history
    1: start app
**/

const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1',
  storeConfig: {
    storage: localforage,
    blacklist: ['router'], // reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
