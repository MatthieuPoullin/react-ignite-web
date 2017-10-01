import React, { Component } from 'react'

import Menu from '../Menu/Menu'

import logo from './logo.svg'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <header className='Header'>
        <img src={logo} className='Header-logo' alt='logo' />
        <h1 className='Header-title'>Welcome to React</h1>
        <Menu />
      </header>
    )
  }
}

export default Header
