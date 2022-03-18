import React, {useState} from 'react'
import '../styles/weather-container.css'
import WeatherDetails from './WeatherDetails';

const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export default function WeatherContainer(props) {
    
    const [selectedWeather, setSelectedWeather] = useState(props.forecast.list[0]);
    function getDay(date){
        const d = new Date(date);
        let day = d.getDay();
        return days[day];
    
      }
    function onCelsius(temp){
          return ((temp - 273.15)).toFixed(2);
      }
    function handleSelected(ele){
        setSelectedWeather(props.forecast.list[ele*7])
      }
    
    const data = props.forecast;
      
    const temp = [];
      
    if(typeof(data)==='object')
    for(let i=0;i<5;i++){
        temp.push(data.list[i*7]);
    }
    const weekly = temp.map((daily)=>{
        return(
            <div key={daily.dt} className='mainShow' onClick={()=> handleSelected(temp.indexOf(daily))}>
                <span>{getDay(daily.dt_txt)}</span><br/>
                <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} alt='forecast' /><br/>
                <span className='minTemp'>{onCelsius(daily.main.temp_min)}&#176;</span><span>{onCelsius(daily.main.temp_max)}&#176;</span>     
            </div>
        );
    })
  return (
    <div>
        <div className='mainContainer'>
        <WeatherDetails 
        selected = {selectedWeather} 
        city = {props.forecast.city.name}
        country = {props.forecast.city.country} />
        <div className='mainKing'>{weekly}</div>
      </div> 
    </div>
  )
}
