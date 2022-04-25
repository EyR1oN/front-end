import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <div class="wrapper-top">
        <ul>
          <li class="nav-area-l nav-area-li"><Link to="/home">Home</Link></li>
          <li class="nav-area-r nav-area-li"><Link to="/user">User</Link></li>
          <li class="nav-area-r nav-area-li"><Link to="/login">Log in</Link></li>
          <li class="nav-area-r nav-area-li"><Link to="/service">Service</Link></li>
        </ul>
        
    </div>
    )
  }
}

