import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'


class Menu extends Component {
  /*
  * use push from react-router-redux of <Link /> from react-router
  */
  render () {
    return (
        <nav>
            <button onClick={() => this.props.goTo('/')}>Home</button>
            <Link to="/friends">Friends</Link>
        </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      goTo: (url) => dispatch(push(url))
  }
}

export default connect(null, mapDispatchToProps)(Menu)