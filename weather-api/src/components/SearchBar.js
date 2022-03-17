import React, { Component } from 'react'
import '../styles/searchBar.css'
import Weather from './Weather';

const API = {
  key: `34b03d45fcf5ba1abdb7ca99a6cd5c53`,
  base: `https://api.openweathermap.org/data/2.5/`
}
class SearchBar extends Component {
  /*componentDidMount(){
    fetch(`${API.base}forecast?id=524901&appid=${API.key}`)
    .then(res => res.json())
    .then(data => console.log(data));
//    console.log(this.state.data);
  }*/
  constructor(props){
      super(props);
      this.state = {
          select:'',
          searched:'',
          forecast:[]
      }
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleSearchedChange = this.handleSearchedChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSelectChange(e){
    this.setState({select: e.target.value})
  }
  handleSearchedChange(e){
    this.setState({searched: e.target.value})
  }
  handleSubmit(){
    //http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
    if(this.state.select==='cityName'){
      fetch(`${API.base}forecast?q=${this.state.searched}&appid=${API.key}`)
      .then(res => res.json())
      .then(data => this.setState({forecast:data}));
      //console.log(this.state.forecast);
    }
    else if(this.state.select==='cityId'){
      fetch(`${API.base}forecast?id=${parseInt(this.state.searched)}&appid=${API.key}`)
      .then(res => res.json())
      .then(data => this.setState({forecast:data}));
    //  console.log(this.state.forecast);
    }
    else if(this.state.select==='zipCode'){
      fetch(`${API.base}forecast?id=${parseInt(this.state.searched)}&appid=${API.key}`)
      .then(res => res.json())
      .then(data => this.setState({forecast:data}));
      //console.log(this.state.forecast);
    }
  }
  render() {
    return (
      <>
        <div className='searchBar'>
            <select className='selector' name='searchBy' value={this.state.select} onChange={this.handleSelectChange}>
                <option value={'none'} defaultValue disabled hidden>Search By</option>
                <option value={'cityName'}>City Name</option>
                <option value={'cityId'}>City id</option>
                <option value={'zipCode'}>Zip Code</option>
            </select>
              <input className='searched' type="text" placeholder='Search Item' value={this.state.searched} onChange={this.handleSearchedChange} />
              <input className='searchClicked' type='button' value='Search' onClick={this.handleSubmit} />
        </div>
        <Weather forecast = {this.state.forecast}/>
      </>
    )
  }
}
export default SearchBar;
