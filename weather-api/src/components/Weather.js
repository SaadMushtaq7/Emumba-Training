import React, { Component } from 'react'
import '../styles/weather.css'
import WeatherDisplay from './WeatherDisplay';
/*const API = {
  key: `34b03d45fcf5ba1abdb7ca99a6cd5c53`,
  base: `https://api.openweathermap.org/data/2.5/`
}*/
const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedWeather: this.props.forecast.list[0],
    }
    this.getDay = this.getDay.bind(this);
    this.onCelsius = this.onCelsius.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }
  getDay(date){
    const d = new Date(date);
    let day = d.getDay();
    return days[day];

  }
  onCelsius(temp){
      return Math.round(temp - 273.15);
  }
  handleSelected(ele){
  //  this.setState({
  //    selectedWeather: this.props.forecast.list[ele*7]
  //  })
  }
  render() {
    
    console.log(this.props.forecast);
    const data = this.props.forecast;
    
    const temp = [];
    
    if(typeof(data)==='object')
    for(let i=0;i<5;i++){
      temp.push(data.list[i*7]);
    }
   // console.log(temp);
    const weekly = temp.map((daily)=>{
      return(
            <div key={daily.dt} className='mainShow' onClick={() => this.handleSelected(temp.indexOf(daily))}>
              <span>{() => this.getDay(daily.dt_txt)}</span><br/>
              <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} alt='forecast' /><br/>
              <span style={{marginRight:25}}>{() => this.onCelsius(daily.main.temp_min)}C</span><span>{() => this.onCelsius(daily.main.temp_max)}C</span>     
            </div>
        
      );
    })
    return (
      <div className='mainContainer'>
        <WeatherDisplay 
        selected = {this.state.selectedWeather} 
        city = {this.props.forecast.city.name}
        country = {this.props.forecast.city.country} /> 
        <div className='mainKing'>{weekly}</div>
      </div>
    )
    
  }
}

export default Weather;
