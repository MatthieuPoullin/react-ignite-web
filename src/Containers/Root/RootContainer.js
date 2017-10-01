import React, { Component } from 'react'
import { connect } from 'react-redux'

import { NavigationRouter, RouteView } from '../../Navigation/NavigationRouter'

import ReduxPersist from '../../Config/ReduxPersist'
import StartupActions from '../../Redux/StartupRedux'

import Header from '../../Components/Header/Header'

import './App.css'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
        <NavigationRouter>
            <div className='App'>
                <Header />
                <RouteView className="App-view"/>
            </div>
        </NavigationRouter>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
