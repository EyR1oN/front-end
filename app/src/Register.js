import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './html_css/styles/style_login.css'


export default class Register extends Component {
  render() {
    return (
        <div class="log">
          <div class="login">
            <h1>Registration</h1>
          </div>
          <div class="box-log">
            <input type="user" name="" placeholder="Username" required></input>
            <input type="password" name="" placeholder="Password" required></input>
            <input type="password" name="" placeholder="Confirm password" required></input>
            <input type="submit" name="" value="Submit"></input>
            <Link to="/login">Log in</Link>
          </div>
        
      </div>
    )
  }
}
