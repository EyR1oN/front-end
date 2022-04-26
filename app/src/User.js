import React, { useState } from 'react'
import Login from './Login'
import { sendRequest } from './SendRequest.js'
import { Navigate, useNavigate } from "react-router-dom";
import './html_css/styles/layout.css'

export default function User() {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('userData')) || '')
  let navigate = useNavigate();
  const saveData = (e) => {
    e.preventDefault();
    const requestURL = `http://localhost:5000/user/${user.oldUsername}`;
    sendRequest('PUT', requestURL, user.oldUsername, user.oldPassword, user)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  };

  const logout = (out) => {
    out.preventDefault();
    console.log("logout");
    setUser({username: '', firstName: '', lastName: '', email: '', password: '', phoneNumber: ''});
    localStorage.clear();
    navigate("/login");
  };

  if (!window.localStorage.getItem("userData")){
    navigate("/login");
    return;
  }

  return (
    <div className="wrapper-top">
    <div className="row"></div>
    <div className="move-down">
      <form>
      <h6 className="col-4">User information</h6>
      <div>
          <div className="row">
          <div className="col-lg-6">
              <div>
              <label className="form-control-label" htmlFor="input-username">Username</label>
              <input 
                type="text"
                id="input-username"
                className="form-control form-control-alternative"
                placeholder="Username" defaultValue={user?.username || ''}
                onChange={e => setUser(prev => ({...prev, firstName: e.target.value}))} 
              />
              </div>
          </div>
          <div className="col-lg-6">
              <div>
              <label className="form-control-label" htmlFor="input-email">Email address</label>
              <input 
                type="text"
                id="input-email"
                className="form-control form-control-alternative"
                placeholder="Email" defaultValue={user?.email || ''}
                onChange={e => setUser(prev => ({...prev, email: e.target.value}))} 
              />
              </div>
          </div>
          </div>
          <div className="row">
          <div className="col-lg-6">
              <div>
              <label className="form-control-label" htmlFor="input-first-name">First name</label>
              <input 
                type="text"
                id="input-first-name"
                className="form-control form-control-alternative"
                placeholder="First name" defaultValue={user?.firstName || ''}
                onChange={e => setUser(prev => ({...prev, email: e.target.value}))} 
              />
              </div>
          </div>
          <div className="col-lg-6">
              <div>
              <label className="form-control-label" htmlFor="input-last-name">Last name</label>
              <input 
                type="text"
                id="input-last-name"
                className="form-control form-control-alternative"
                placeholder="Last name" defaultValue={user?.lastName || ''}
                onChange={e => setUser(prev => ({...prev, lastName: e.target.value}))} 
              />
              </div>
          </div>
          </div>
          <div className="row">
              <div className="col-lg-4">
              <div>
                  <label className="form-control-label" htmlFor="input-city">Password</label>
                  <input 
                    type="password"
                    id="input-password"
                    className="form-control form-control-alternative"
                    placeholder="Password" defaultValue={user?.password || ''}
                    onChange={e => setUser(prev => ({...prev, password: e.target.value}))} 
                  />
              </div>
              </div>
              <div className="col-lg-4">
              <div>
                  <label className="form-control-label" htmlFor="input-country">Phone</label>
                  <input 
                    type="text"
                    id="input-country"
                    className="form-control form-control-alternative"
                    placeholder="Country" defaultValue={user?.phoneNumber || ''}
                    onChange={e => setUser(prev => ({...prev, phoneNumber: e.target.value}))} 
                />
              </div>
              </div>
          </div>
      </div>
      </form>
      <form>
      <div className="box">
          <input type="submit" name="" value="Save" onClick={saveData}></input>
          <input type="submit" name="" value="Delete me"></input>
          <input type="submit" name="" value="Log Out" onClick={logout}></input>
        </div>
      </form>
    </div>
  </div>
  )
}
