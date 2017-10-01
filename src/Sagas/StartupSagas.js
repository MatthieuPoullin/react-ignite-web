import { put, select } from 'redux-saga/effects'
import FriendsActions from '../Redux/FriendsRedux'

// exported to make available for tests
export const selectFriends = (state) => state.friends.payload

// process STARTUP actions
export function * startup (action) {
  const friends = yield select(selectFriends)

  // only get if we don't have it yet
  if (! friends.length) {
    yield put(FriendsActions.friendsRequest())
  }
}
