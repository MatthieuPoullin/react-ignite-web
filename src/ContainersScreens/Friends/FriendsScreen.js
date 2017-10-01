import React, { Component } from 'react'
import { connect } from 'react-redux'

class FriendsScreen extends Component {
  render () {
    return (
      <div>
        {
          this.props.friends.map((friend) => {
            return <p key={friend.id}>{friend.name}</p>
          })
        }
        {
          this.props.userFriends.map((friend) => {
            return <p key={friend.id}>{friend.name}</p>
          })
        }
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen)
