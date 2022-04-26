import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { sendRequest } from './SendRequest.js'
import './html_css/styles/style_login.css'

export default class Login extends Component {

  handleSubmit = reg => {
    reg.preventDefault()
    const requestURL = 'http://localhost:5000/login'
    const data = {
      username: this.username,
      password: this.password
    }
    sendRequest('POST', requestURL, null, null, data)
    .then((data) => window.localStorage.setItem("userData", JSON.stringify(data)))
    .catch((err) => console.log(err));
    console.log(localStorage.getItem("userData"))
    
  }

  render() {
    return (
    <div className="log">

        <div className="login">
          <h1>Login</h1>
        </div>
        <form className="box-log" onSubmit={this.handleSubmit}>
          <input type="text" name="Username" placeholder="Username" required onChange={reg => this.username = reg.target.value}></input>
          <input type="password" name="Password" placeholder="Password" required onChange={reg => this.password = reg.target.value}></input>
          <input type="submit" name="Submit" value="Submit"></input>
          <Link to="/register">Sign up</Link>
        </form>

    </div>
    )
  }
}