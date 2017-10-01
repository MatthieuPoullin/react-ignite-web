import { call, put } from 'redux-saga/effects'
import FriendsActions from '../Redux/FriendsRedux'

export function * getFriendsList (api, action) {
  const { params } = action
  // make the call to the api
  const response = yield call(api.getFriends, params)
  if (response.ok) {
    yield put(FriendsActions.friendsSuccess(response.data))
  } else {
    yield put(FriendsActions.friendsFailure())
  }
}
