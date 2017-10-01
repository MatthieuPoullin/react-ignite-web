import React, { Component } from 'react'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import history from '../Navigation/History'

import HomeScreen from '../ContainersScreens/Home/HomeScreen'
import FriendsScreen from '../ContainersScreens/Friends/FriendsScreen'


export class NavigationRouter extends Component {
  render () {
    return (
      <ConnectedRouter history={history}>
        {this.props.children}
      </ConnectedRouter>
    )
  }
}
export class RouteView extends Component {
  render () {
    return (
        <div className={this.props.className}>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/friends' component={FriendsScreen} />
        </div>
    )
  }
}