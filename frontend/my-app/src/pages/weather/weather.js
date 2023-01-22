import React, { useState } from 'react'
import axios from 'axios'
import "./weather.css"

function Weather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  
    const searchLocation = (event) => {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        setLocation('')
      }
    }
  return (
    <div className='container main'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,74.7C672,75,768,149,864,165.3C960,181,1056,139,1152,149.3C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div>
      <h1>Check the weather forecast</h1>
      <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
       </div> 
       <div className="container main1">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <p>Temp:{data.main.temp.toFixed()}°F</p> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>Min Temp:{data.main.temp_min}°F</p> : null}
              
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>Max Temp:{data.main.temp_max}°F</p> : null}
              
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>Windspeed:{data.wind.speed.toFixed()} MPH</p> : null}
             
            </div>
    </div>
        }
    </div>
    </div>
  )
}

export default Weather
