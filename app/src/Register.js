import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { sendRequest } from './SendRequest.js'
import './html_css/styles/style_login.css'

export default class Register extends Component {

  handleSubmit = reg => {
    const requestURL = 'http://localhost:5000/user'
    reg.preventDefault()
    const data = {
      username: this.username,
      password: this.password,
      confirmPassord: this.confirmPassord
    }
    if (this.password === this.confirmPassord) {
      sendRequest('POST', requestURL, null, null, data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    }
  }

  render() {
    return (
        <form className="log" onSubmit={this.handleSubmit}>
          <div className="login">
            <h1>Registration</h1>
          </div>
          <div className="box-log">
            <input type="user" name="" placeholder="Username" required onChange={reg => this.username = reg.target.value}></input>
            <input type="password" name="" placeholder="Password" required onChange={reg => this.password = reg.target.value}></input>
            <input type="password" name="" placeholder="Confirm password" required onChange={reg => this.confirmPassord = reg.target.value}></input>
            <input type="submit" name="" value="Submit"></input>
            <Link to="/login">Log in</Link>
          </div>
        
      </form>
    )
  }
}
