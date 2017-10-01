import React, { Component } from 'react'
import { connect } from 'react-redux'
import FriendsActions from '../../Redux/FriendsRedux'

class FriendsScreen extends Component {
  renderForm () {
      let input = null
      return (
          <form
              onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                  return
                }
                this.props.addFriend(input.value)
                input.value = ''
              }}
            >
              <input ref={node => input = node } />
              <button type="submit">Add friend</button>
          </form>
      )
  }
  render () {
    return (
      <div>
        {
          this.props.friends.map((friend, i) => {
            return <p key={i}>{friend}</p>
          })
        }
        {
          this.props.userFriends.map((friend, i) => {
            return <p key={i}>{friend}</p>
          })
        }
        {this.renderForm()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends.payload,
    userFriends: state.friends.userFriends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addFriend: (name) => dispatch(FriendsActions.friendsAdd(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen)
