import React, { Component } from 'react'
import '../styles/weatherDisplay.css'

let cel = 0; 
const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//let tempToday = 0;
class WeatherDisplay extends Component {
  constructor(props){
    super(props);
    this.getDay = this.getDay.bind(this);
    //this.onCelsius = this.onCelsius.bind(this);
    //this.onFarenheit = this.onFarenheit.bind(this);
  }   
  getDay(date){
    const d = new Date(date);
    let day = d.getDay();
    return days[day];

  }
  /*onCelsius(){
 
    let temp = this.props.selected.main.temp;
    
    if(cel===1){
      cel=0;
      tempToday = (temp - 273.15).toFixed(2);
      
    }
  }
  onFarenheit(){
    let temp = this.props.selected.main.temp
    if(cel===0){
      cel=1;
      tempToday = ((temp - 273.15) * 9/5 + 32).toFixed(2)
      
    }
  }*/
  render() {
    
    const weather = this.props.selected;
    //console.log(this.state.temperature);
    
    console.log(this.props.selected.main.temp);
    return (
      
      <div className='mainContainerWeather'>
      <div className='mainDisplayWeather'>
        <div className='weatherSummary'>
          <h2>{this.props.city}, {this.props.country}</h2>
          <span>{this.getDay(weather.dt_txt)}</span><br/>
          <span>{weather.weather[0].main}</span>
        </div>
      <div className='todayWeather'>
        <div className='tempImg'>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='forecast'/>
            <h1 style={{marginLeft:50}}>
             {(this.props.selected.main.temp - 273.15).toFixed(2)}
             </h1>
             <span style={{cursor: 'pointer', marginRight:5, marginLeft:5, fontSize:18}} onClick={this.onCelsius}>C</span>
              | 
              <span style={{cursor: 'pointer', marginLeft:5, fontSize:18}} onClick={this.onFarenheit}>F</span>
        </div>
        <div className='weatherDetails'>
            <span>Pressure: {weather.main.pressure} hPa</span><br/>
            <span>Humidity: {weather.main.humidity}%</span><br/>
            <span>Wind Speed: {weather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
    </div>
    )
  }
}
export default WeatherDisplay;