import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from 'react-switch'
import { FavouriteData } from '../../redux/reducers/favouriteSlice'
import { getFavouriteData } from '../../redux/reducers/getFavSlice'
import './homeDetails.css'

const HomeDetails = () => {
  useEffect(() => {
    dispatch(getFavouriteData())
  }, [])

  const dispatch = useDispatch()
  const [checked, setChecked] = useState(true)
  const weather: any = useSelector((state: any) => state.search)
  const fav: any = useSelector((state: any) => state.getFavourite.data)

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked)
  }

  console.log('searched', weather)
  return (
    <div className="homeBodyContainer">
      <div className="HomePage">
        {weather && weather.search && (
          <div className="homePagePlace">
            {weather.search.place + ' , ' + weather.search.region}
          </div>
        )}
        {weather && weather.search && (
          <>
            {!weather.search.fav ? (
              <div
                className="homePageFav"
                onClick={() => {
                  console.log('remove', weather.search, fav.data)
                  console.log('removeee', Object.keys(fav.data))
                  for (var i = 0; i < Object.keys(fav.data).length; i++) {
                    console.log(Object.keys(fav.data)[i])
                  }
                }}
              >
                <div className="homePageFavIcon">
                  <img
                    src={require('../../assets/icons/icon_favourite_Active.png')}
                    alt="Favourite"
                    width={25}
                  />
                </div>
                <div className="homePageFavText" style={{ color: '#FAD05B' }}>
                  Added to favourite
                </div>
              </div>
            ) : (
              <div
                className="homePageFav"
                onClick={() => {
                  dispatch(FavouriteData(weather.search))
                }}
              >
                <div className="homePageFavIcon">
                  <img
                    src={require(`../../assets/icons/icon_favourite.png`)}
                    alt="Favourite"
                  />
                </div>
                <div className="homePageFavText">Add to favourite</div>
              </div>
            )}
          </>
        )}
        {weather && weather.search && (
          <div className="homePageWeather">
            <div className="homePageWeatherIcon">
              <img
                src={weather.search.icon}
                alt="Weather"
                className="homePageWeatherIcon"
              />
            </div>
            <div className="homePageWeatherTemperature">
              <div className="homePageWeatherTemp">
                {' '}
                {checked
                  ? weather.search.temp_f.toFixed(0) + '\u00B0'
                  : weather.search.temp_c.toFixed(0) + '\u00B0'}{' '}
              </div>
              <div className="homePageWeatherUnit">
                <Switch
                  borderRadius={4}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                  offColor="transparent"
                  onColor="transparent"
                  uncheckedHandleIcon={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 18,
                        color: 'red',
                      }}
                    >
                      {'\u00B0'}C
                    </div>
                  }
                  uncheckedIcon={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 18,
                        paddingRight: 2,
                        color: 'white',
                        zIndex: '2',
                      }}
                    >
                      {'\u00B0'}F
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 18,
                        paddingRight: 2,
                        color: 'white',
                      }}
                    >
                      {'\u00B0'}C
                    </div>
                  }
                  checkedHandleIcon={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        color: 'red',
                        fontSize: 18,
                      }}
                    >
                      {'\u00B0'}F
                    </div>
                  }
                />
              </div>
            </div>
            <div className="homePageWeatherText">
              {weather.search.condition}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeDetails
