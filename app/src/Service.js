import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './html_css/styles/layout.css'

export default class Service extends Component {
  render() {
    return (
        <div class="container-aud">
        <div class="header">
          <h1>Choose your auditorium</h1>
        </div>
          <ul>
            <li class="one_half first">
              <article>
                <h6 class="heading font-x1"><Link to="/auditorium">Auditorium №1</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
            <li class="one_half">
              <article>
                <h6 class="heading font-x1"><Link to="/auditorium">Auditorium №2</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
            <li class="one_half first">
              <article>
                <h6 class="heading font-x1"><Link to="/auditorium">Auditorium №3</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
            <li class="one_half">
              <article>
                <h6 class="heading font-x1"><Link to="/auditorium">Auditorium №4</Link></h6>
                <p>Select for some time you need [&hellip;]</p>
              </article>
            </li>
          </ul>
        
    </div>
    )
  }
}
