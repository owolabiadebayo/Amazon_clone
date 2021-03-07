import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__link">

       <button className="amazon"><span>Today's deal</span></button> 
        <button className="amazon"><span>Customer Service</span></button>
         <button className="amazon"><span>Gift Cards</span></button>
        <button className="amazon"><span>Sell</span></button>

      </div>
    </div>
  )
}

export default Navbar
