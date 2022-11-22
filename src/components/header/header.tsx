import React, { useEffect } from 'react'
import './header.css'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation } from '../../redux/reducers/locationAuto'

const Header = () => {
  const dispatch = useDispatch()
  const location = useSelector((state: any) => state.location)

  console.log('location Auto', location)

  useEffect(() => {
    dispatch(getLocation('udupi'))
  }, [])

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
        <div className="headerAutoComplete">hello</div>
      </form>
    </div>
  )
}

export default Header
