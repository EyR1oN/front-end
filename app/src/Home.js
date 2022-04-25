import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './html_css/styles/layout.css'


export default class Home extends Component {
  render() {
    return (
            <div className="welcome-text">
                <h1>Try on your own</h1>
                <Link to="/service">Service</Link>
            </div>
    )
  }
}
