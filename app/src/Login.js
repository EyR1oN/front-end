import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './html_css/styles/style_login.css'

export default class Login extends Component {
  render() {
    return (
    <div class="log">

        <div class="login">
          <h1>Login</h1>
        </div>
        <form class="box-log">
          <input type="text" name="" placeholder="Username" required></input>
          <input type="password" name="" placeholder="Password" required></input>
          <input type="submit" name="" value="Submit"></input>
          <Link to="/register">Sign up</Link>
        </form>

    </div>
    )
  }
}