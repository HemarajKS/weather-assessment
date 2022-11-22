import React, { useEffect, useState } from 'react'
import './header.css'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation } from '../../redux/reducers/locationAuto'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()
  const location = useSelector((state: any) => state.location)

  console.log('location Auto', location.data)

  // useEffect(() => {
  //   dispatch(getLocation('udupi'))
  // }, [])

  const onChangeHandler = (searchString: string) => {
    setSearchValue(searchString)
    dispatch(getLocation(searchString))
  }

  useEffect(() => {
    console.log('search value', searchValue)
  })

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
          value={searchValue}
          onChange={(e: any) => {
            onChangeHandler(e.target.value)
          }}
        />
        <button className="headerSearchSubmit">
          <img
            src={require('../../assets/icons/icon_search_white.png')}
            alt="Search"
            className="headerSearchIcon"
          />
        </button>
        <div className="headerAutoComplete">
          {location &&
            location.data &&
            location.data.data &&
            location.data.data.map((ele: { name: string }, i: number) => (
              <div key={i} className="headerAutoCompleteItems">
                {ele.name}
              </div>
            ))}
        </div>
      </form>
    </div>
  )
}

export default Header
