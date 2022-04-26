import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './html_css/styles/layout.css'

export default class Service extends Component {
  render() {
    return (
      <div className="wrapper-top">
        <div className="container-aud">
        <div className="header">
          <h1>Choose your auditorium</h1>
        </div>
          <ul>
            <li className="one_half first">
              <article>
                <h6 className="heading font-x1"><Link to="/auditorium">Auditorium №1</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
            <li className="one_half">
              <article>
                <h6 className="heading font-x1"><Link to="/auditorium">Auditorium №2</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
            <li className="one_half first">
              <article>
                <h6 className="heading font-x1"><Link to="/auditorium">Auditorium №3</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
            <li className="one_half">
              <article>
                <h6 className="heading font-x1"><Link to="/auditorium">Auditorium №4</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
          </ul>
        
    </div>
    </div>
    )
  }
}
