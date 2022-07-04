import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [ weather, setWeather ] = useState({});

  useEffect(() => {

    const success = pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fca4b353bb8c707b4f6c316dba6b09e9`)
        .then(res => setWeather(res.data))

    }

    navigator.geolocation.getCurrentPosition(success);

  }, [])

  console.log(weather);

  let celcius = Math. ceil(weather.main?.temp  - 273.15);
  let farenheit = Math. ceil((celcius * 9/5) + 32);

  let background = 'https://miro.medium.com/max/1838/1*PzfE18BkPw6luo7YW7c9XQ.jpeg'

  if (weather.weather?.[0].icon === '01d' || weather.weather?.[0].icon === '01n'){
    background = 'https://images.vexels.com/media/users/3/290655/raw/0b449b6fd4735782406e6311d1719396-desierto-paisaje-puesta-de-sol-naturaleza-ilustraci-n.jpg'
  }else if(weather.weather?.[0].icon === '02d' || weather.weather?.[0].icon === '02n'){
    background = 'https://images.vexels.com/media/users/3/150681/raw/bd078df853da20951dc89b55c19f68b7-ilustracion-de-paisaje-de-carretera.jpg'
  }else if(weather.weather?.[0].icon === '03d' || weather.weather?.[0].icon === '03n'){
    background = 'https://cdn.pixabay.com/photo/2017/03/11/17/49/maple-2135514_960_720.jpg'
  }else if(weather.weather?.[0].icon === '04d' || weather.weather?.[0].icon === '04n'){
    background = 'https://miro.medium.com/max/1838/1*PzfE18BkPw6luo7YW7c9XQ.jpeg'
  }else if(weather.weather?.[0].icon === '09d' || weather.weather?.[0].icon === '09n'){
    background = 'https://cdn.pixabay.com/photo/2017/03/27/18/38/rain-2179933_960_720.jpg'
  }else if(weather.weather?.[0].icon === '10d' || weather.weather?.[0].icon === '10n'){
    background = 'https://cdn.pixabay.com/photo/2015/10/22/17/45/leaf-1001679_960_720.jpg'
  }else if(weather.weather?.[0].icon === '11d' || weather.weather?.[0].icon === '11n'){
    background = 'https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_960_720.jpg'
  }else if(weather.weather?.[0].icon === '13d' || weather.weather?.[0].icon === '13n'){
    background = 'https://www.xtrafondos.com/wallpapers/paisaje-de-lago-en-la-nieve-6880.jpg'
  }else if(weather.weather?.[0].icon === '50d' || weather.weather?.[0].icon === '50n'){
    background = 'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlcmdyZWVuJTIwdHJlZXN8ZW58MHx8MHx8&w=1000&q=80'
  }
  

   document.body.style = `background-image: url(${background});`


   const [ unit, setUnit ] =useState(true)
   
   const temperature = () =>{
    setUnit(!unit)
   }



  return (
    <div className="App">
      <h1 className='app_title'>Weather App</h1>
      <div className='app_data'>
      <h2 className='app_country'>{weather.name}, {weather.sys?.country}</h2>
      <div className='app_icon_data'>
        <div className='app_icon'>
         <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
         <h4>{weather.weather?.[0].description}</h4>
        </div>
        <div className='app_climate'>
          <h2 className='app_celcius'>{unit ? celcius + ' °C' : farenheit + ' °F'} </h2> <br />
          <div className='app_information'>
            <p> <i class="fa-solid fa-wind"></i> Wind speed: {weather.wind?.speed} m/s</p> <br />
            <p> <i class="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all}%</p> <br />
            <p> <i class="fa-solid fa-temperature-half"></i> Pressure: {weather.main?.pressure} mb</p>
          </div>
        </div>
      </div>
      <button onClick={temperature}>°F / °C</button>
      </div>
      
    </div>
  )
}

export default App
