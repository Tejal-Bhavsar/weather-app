import './App.css';
import React,{ useEffect, useState } from 'react';

function App() { 

  const APIKEY = "49575309fc1b87cac117983a776b57e5";
  const [ weather, setWeather ] = useState({})
  const [ city, setCity ] = useState('delhi')
  const [ search , setSearch ] = useState('')
  useEffect(() => {
    getWeather()
  },[city])

   

  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
    const data =  await response.json()
    console.log('here', data)
    setWeather(data)
    console.log(weather,'smzana')
  }
  
  const getSearch = (e) => {
    e.preventDefault()
    setCity(search)
    setSearch('')
    
  }

  
  return (

    <div className="App">
     <div className="maindiv">
       <form onSubmit={getSearch}>
        <input className="searchinput"
        placeholder="search" 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" type="submit" >search</button>
       </form>

      {  (Object.entries(weather).length != 0)? 

        <div className="weather-wrap">
          <div className="location-box">
            <div className="location">{weather.name}<p>{weather.sys.country}</p></div>
            
            <div className="date">date {} </div>
            

            <div className="weather-box">
              <div className="temp"> {weather.main.temp}°c</div>

              <div className="weather">
                <p>{weather.weather[0].main}</p>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          </div>
        </div>
        : "enter the city name"
      }

     </div>
    </div>
  );
}

export default App;
