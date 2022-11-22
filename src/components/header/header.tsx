import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={require('../../assets/images/logo_web.png')} alt="Logo" />
      </div>
      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
      </div>
    </div>
  )
}

export default Header
