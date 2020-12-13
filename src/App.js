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
        placeholder="enter city name" 
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
            
            {/* <div className="date">date {} </div> */}
            

            <div className="weather-box">
              <div className="temp"> {weather.main.temp}°c</div>

              {/* <div  className="minmax">
                <p><span>⬆{weather.main.feelslike}</span>
                   <span>⬇{weather.main.max}</span>
                </p>
              </div> */}
              <div className="description">
                
              </div>

              <div className="weather">
                <p>Humidity: &ensp;{weather.main.humidity} </p>
                <p>Pressure: &ensp;{weather.main.pressure} </p>
                <p>discription:&ensp;{weather.weather[0].main}</p>
                <p>Wind: &ensp;{weather.wind.speed} </p>
                
              </div>
            </div>
          </div>
        </div>
        : "<h3>enter the city name</h3>"
      }

     </div>
    </div>
  );
}

export default App;
