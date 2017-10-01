export default {
  // Functions return fixtures
  getFriends: () => {
    return {
      ok: true,
      data: require('../Fixtures/friends.json')
    }
  }
}
