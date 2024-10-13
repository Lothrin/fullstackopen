import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [searchCountry, setSearch] = useState('')
  const [allCountries, setAllCountries] = useState([]) 
  const [filteredCountries, setFilteredCountries] = useState([]) 
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setAllCountries(response.data)
      })
      .catch(error => {
        console.error('Error fetching country data:', error)
      })
  }, [])


  useEffect(() => {
    if (searchCountry) {
      const filtered = allCountries.filter(country =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      );
      const capital = filtered.capital;
      const api_key = import.meta.env.VITE_WEATHER_KEY; 

      if (capital) {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
          .then(response => {
            setWeather(response.data);
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
          });
      }
      setFilteredCountries(filtered)
    } else {
      setFilteredCountries([]) 
    }
  }, [searchCountry, allCountries])
  useEffect(() => {
    if (selectedCountry) {
      const capital = selectedCountry.capital;
      const api_key = import.meta.env.VITE_WEATHER_KEY; 

      if (capital) {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
          .then(response => {
            setWeather(response.data);
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
          });
      }
    }
  }, [selectedCountry]);

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const renderCountryDetails = (country) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map(lang => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width={150} />

        {weather && (
          <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <h2>Find countries</h2>
      Country Name: <input onChange={handleSearch} value={searchCountry} />

      {filteredCountries.length > 10 && <p>Too many matches, specify another filter</p>}

      {filteredCountries.length <= 10 && filteredCountries.length > 1 && (
        <ul>
          {filteredCountries.map(country => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => setSelectedCountry(country)}>show</button>
            </li>
            
          ))}
        </ul>
      )}

      {filteredCountries.length === 1 && renderCountryDetails(filteredCountries[0])}
      {selectedCountry && renderCountryDetails(selectedCountry)}
    </div>
  )
}

export default App
