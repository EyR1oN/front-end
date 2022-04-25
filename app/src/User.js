import React, { Component } from 'react'

import './html_css/styles/layout.css'

export default class User extends Component {
  render() {
    return (
        <div>
        <div class="row"></div>
        <div class="move-down">
            <form>
            <h6 class="col-4">User information</h6>
            <div>
                <div class="row">
                <div class="col-lg-6">
                    <div>
                    <label class="form-control-label" for="input-username">Username</label>
                    <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value="user"></input>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div>
                    <label class="form-control-label" for="input-email">Email address</label>
                    <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="user@example.com"></input>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-6">
                    <div>
                    <label class="form-control-label" for="input-first-name">First name</label>
                    <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name" value="Ivan"></input>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div>
                    <label class="form-control-label" for="input-last-name">Last name</label>
                    <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" value="Yakovina"></input>
                    </div>
                </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                    <div>
                        <label class="form-control-label" for="input-city">Password</label>
                        <input type="password" id="input-city" class="form-control form-control-alternative" placeholder="Password" value="password"></input>
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div>
                        <label class="form-control-label" for="input-country">Country</label>
                        <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="United States"></input>
                    </div>
                    </div>
                </div>
            </div>
            </form>
            <div class="box">
                <input type="submit" name="" value="Save"></input>
                <input type="submit" name="" value="Delete me"></input>
                <input type="submit" name="" value="Log Out"></input>
              </div> 
        </div>
        


    </div>
    )
  }
}
