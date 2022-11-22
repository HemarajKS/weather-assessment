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

  const submitHandler = (e: any) => {}
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
          onSubmit={(e: any) => {
            submitHandler(e.target.search.value)
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
            location.data.data.map(
              (
                ele: { name: string; region: string; lat: number; lng: number },
                i: number,
              ) => (
                <div
                  key={i}
                  className="headerAutoCompleteItems"
                  onClick={() => {
                    dispatch(getweather(`${ele.lat},${ele.lng}`))
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
