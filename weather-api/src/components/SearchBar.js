import React, { useState } from 'react'
import '../styles/search-bar.css'
import WeatherContainer from './WeatherContainer'

const API = {
    key: `62c645e31a2dfb4c3146cbff3bf86345`,
    base: `https://api.openweathermap.org/data/2.5/`
  }
export default function SearchBar() {
    const [select, setSelect] = useState('')
    const [searched, setSearched] = useState('');
    const [forecast, setForecast] = useState([]);

    function handleSelectChange(e){
        setSelect(e.target.value);
      }
    function handleSearchedChange(e){
        setSearched(e.target.value)
    }
    function handleSubmit(){
        
        if(select==='cityName'){
          fetch(`${API.base}forecast?q=${searched}&appid=${API.key}`)
          .then(res => res.json())
          .then(data => setForecast(data));
          
        }
        else if(select==='cityId'){
          fetch(`${API.base}forecast?id=${parseInt(searched)}&appid=${API.key}`)
          .then(res => res.json())
          .then(data => setForecast(data));
        
        }
        else if(select==='zipCode'){
          fetch(`${API.base}forecast?id=${parseInt(searched)}&appid=${API.key}`)
          .then(res => res.json())
          .then(data => setForecast(data));
          
        }
      }
  return (
    <div>
      <div className='searchBar'>
            <select className='selector' name='searchBy' value={select} onChange={handleSelectChange}>
                <option value={'none'} defaultValue hidden>Search By</option>
                <option value={'cityName'}>City Name</option>
                <option value={'cityId'}>City id</option>
                <option value={'zipCode'}>Zip Code</option>
            </select>
              <input className='searched' type="text" placeholder='Search Item' value={searched} onChange={handleSearchedChange} />
              <input className='searchClicked' type='button' value='Search' onClick={handleSubmit} />
        </div>
          
          
          {(forecast.length===0)?(<div></div>):(<WeatherContainer forecast = {forecast}/>)}
                
    </div>
  )
}
