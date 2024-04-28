import React from 'react'
import Logo from './Logo' 
import Navigation from './Navigation'
const Header = () => {
  return (
    <div className="header_container">
    <div className="logo_container">
  <Logo/>
  </div>
  <div className='navigation_container'>
  <Navigation/>
  </div>
  </div>
  )
}

export default Header
