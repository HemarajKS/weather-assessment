import React, { useEffect, useState } from 'react';
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { getLocation } from '../../redux/reducers/locationAuto';
import { getweather } from '../../redux/reducers/weatherSlice';
import currentData, { currentSearch } from '../../redux/reducers/currentData';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.location);
  const weather = useSelector((state: any) => state.weather);

  const onChangeHandler = (searchString: string) => {
    setSearchValue(searchString);
    dispatch(getLocation(searchString));
  };

  useEffect(() => {
    console.log('weather', weather);
    const data: any = weather &&
      weather.data &&
      weather.data.data && {
        id: `${weather.data.data.location.lat},${weather.data.data.location.lon}`,
        place: weather.data.data.location.name,
        region: weather.data.data.location.region,
        icon: `${weather.data.data.current.condition.icon}`,
        temp_f: weather.data.data.current.temp_f,
        temp_c: weather.data.data.current.temp_c,
        condition: weather.data.data.current.condition.text,
        temp_min: weather.data.data.current.temp_f - 2,
        temp_max: weather.data.data.current.temp_f + 2,
        precep: weather.data.data.current.precip_in,
        humidity: weather.data.data.current.humidity,
        wind: weather.data.data.current.wind_mph,
        visibility: weather.data.data.current.vis_miles,
        fav: false,
      };

    dispatch(currentSearch(data));
  }, [weather]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(getweather(e.target.search.value));
    setShowAutoComplete(false);
  };

  return (
    <div className="header">
      <div className="headerLogo">
        <img src={require('../../assets/images/logo_web.png')} alt="Logo" />
      </div>
      <form className="headerSearch" onSubmit={submitHandler}>
        <input
          type="text"
          className="headerSearchInput"
          placeholder="Search city"
          value={searchValue}
          onChange={(e: any) => {
            onChangeHandler(e.target.value);
          }}
          name="search"
          onFocus={() => {
            setShowAutoComplete(true);
          }}
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
          {showAutoComplete &&
            location &&
            location.data &&
            location.data.data &&
            location.data.data.map(
              (
                ele: { name: string; region: string; lat: number; lon: number },
                i: number
              ) => (
                <div
                  key={i}
                  className="headerAutoCompleteItems"
                  onClick={() => {
                    dispatch(getweather(`${ele.lat},${ele.lon}`));
                    setShowAutoComplete(false);
                  }}
                >
                  {ele.name}, {ele.region}
                </div>
              )
            )}
        </div>
      </form>
    </div>
  );
};

export default Header;
