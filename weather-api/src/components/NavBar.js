import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div style={{background: "#3B3B61", color: "white", fontSize:'15px'}}>
        <p style={{padding: '5px',paddingLeft:'20px'}}>WEATHER FORECAST (5 DAYS)</p>
      </div>
    )
  }
}
export default NavBar;