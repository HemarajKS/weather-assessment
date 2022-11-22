import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const weather: any = 'x'

  return (
    <div className="footer">
      <h1>fOOTER</h1>
      {weather && weather.data && (
        <div className="footerBody">
          <div className="footerIcon">
            <img
              src={require('../../assets/icons/icon_temperature_info.png')}
              alt=""
            />
          </div>

          <div className="footerText">
            <div className="footerInfo">Min - Max</div>
            <div className="footerInfoValue">
              {weather.data.forecasts[0].low + '\u00B0'}
              {} - {weather.data.forecasts[0].high + '\u00B0'}
            </div>
          </div>
        </div>
      )}
      {weather && weather.data && (
        <div className="footerBody">
          <div className="footerIcon">
            <img
              src={require('../../assets/icons/icon_precipitation_info.png')}
              alt=""
            />
          </div>
          <div className="footerText">
            <div className="footerInfo">Precipitation</div>
            <div className="footerInfoValue">
              {weather.data.current_observation.atmosphere.rising}%
            </div>
          </div>
        </div>
      )}
      {weather && weather.data && (
        <div className="footerBody">
          <div className="footerIcon">
            <img
              src={require('../../assets/icons/icon_humidity_info.png')}
              alt=""
            />
          </div>
          <div className="footerText">
            <div className="footerInfo">Humidity</div>
            <div className="footerInfoValue">
              {weather.data.current_observation.atmosphere.humidity}%
            </div>
          </div>
        </div>
      )}
      {weather && weather.data && (
        <div className="footerBody">
          <div className="footerIcon">
            <img
              src={require('../../assets/icons/icon_wind_info.png')}
              alt=""
            />
          </div>
          <div className="footerText">
            <div className="footerInfo">Wind</div>
            <div className="footerInfoValue">
              {' '}
              {weather.data.current_observation.wind.speed} mph
            </div>
          </div>
        </div>
      )}
      {weather && weather.data && (
        <div className="footerBody">
          <div className="footerIcon">
            <img
              src={require('../../assets/icons/icon_visibility_info.png')}
              alt=""
            />
          </div>
          <div className="footerText">
            <div className="footerInfo">Visibility</div>
            <div className="footerInfoValue">
              {weather.data.current_observation.atmosphere.visibility} miles
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer
