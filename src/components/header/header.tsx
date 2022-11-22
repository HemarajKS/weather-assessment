import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={require('../../assets/images/logo_web.png')} alt="Logo" />
      </div>
      <form className="headerSearch">
        <input
          type="text"
          className="headerSearchInput"
          placeholder="Search city"
        />
        <button className="headerSearchSubmit">
          <img
            src={require('../../assets/icons/icon_search_white.png')}
            alt="Search"
            className="headerSearchIcon"
          />
        </button>
      </form>
    </div>
  )
}

export default Header
