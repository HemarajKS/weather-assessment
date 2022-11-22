import React, { useEffect, useState } from 'react'
import './header.css'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation } from '../../redux/reducers/locationAuto'
import { getweather } from '../../redux/reducers/weatherSlice'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()
  const location = useSelector((state: any) => state.location)
  const weather = useSelector((state: any) => state.weather)

  console.log('location Auto', location.data)

  // useEffect(() => {
  //   dispatch(getLocation('udupi'))
  // }, [])

  const onChangeHandler = (searchString: string) => {
    setSearchValue(searchString)
    dispatch(getLocation(searchString))
  }

  useEffect(() => {
    console.log('we', weather)
  }, [weather])

  const submitHandler = (e: any) => {
    e.preventDefault()
  }
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
          name="search"
          onSubmit={submitHandler}
          autoComplete="off"
        />
        <button className="headerSearchSubmit" type="submit">
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
            location.data.data.map(
              (
                ele: { name: string; region: string; lat: number; lon: number },
                i: number,
              ) => (
                <div
                  key={i}
                  className="headerAutoCompleteItems"
                  onClick={() => {
                    dispatch(getweather(`${ele.lat},${ele.lon}`))
                  }}
                >
                  {ele.name}, {ele.region}
                </div>
              ),
            )}
        </div>
      </form>
    </div>
  )
}

export default Header
