import React, {useState, useEffect} from 'react'
import '../styles/weather-details.css'
let cel = 0;
const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export default function WeatherDetails(props) {
  
  let tempVal = (props.selected.main.temp - 273.15).toFixed(2);
  const [tempConverter, setTempConverter] = useState(tempVal);
 
  useEffect(() => {
    setTempConverter((props.selected.main.temp - 273.15).toFixed(2));
  }, [props.selected.main.temp]);
 
  function getDay(date){
    const d = new Date(date);
    let day = d.getDay();
    return days[day];
    
    }  

  function onCelsius(){
    if(cel===1){
      cel = 0;
      let tempVal = (props.selected.main.temp - 273.15).toFixed(2);
      setTempConverter(tempVal)
    }
  }
  function onFarenheit(){
    if(cel===0){
      cel = 1;
      let tempVal = ((props.selected.main.temp - 273.15) * 9/5 +32).toFixed(2);
      setTempConverter(tempVal);
    }
  }
  const weather = props.selected;
  return (
    <div>
      <div className='mainContainerWeather'>
      <div className='mainDisplayWeather'>
        <div className='weatherSummary'>
          <h2>{props.city}, {props.country}</h2>
          <span>{getDay(weather.dt_txt)}</span><br/>
          <span>{weather.weather[0].main}</span>
        </div>
      <div className='todayWeather'>
        <div className='tempImg'>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='forecast'/>
            <h1 className='converterTemp'>
             {tempConverter}
             </h1>
             <a href="/#" className='converterC'  onClick={() => onCelsius()}>&#8451;</a>
              | 
              <a href="/#" className='converterF' onClick={() => onFarenheit()}>&#8457;</a>
        </div>
        <div className='weatherDetails'>
            <span>Pressure: {weather.main.pressure} hPa</span><br/>
            <span>Humidity: {weather.main.humidity}%</span><br/>
            <span>Wind Speed: {weather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
