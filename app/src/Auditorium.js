import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './html_css/styles/layout.css'

export default class Auditorium extends Component {
  render() {
    return (
      <div className="wrapper-top">
          <div className="hoc container clear ">
            <div>
                <div className="one_half-aud first">
                <h6 className="heading">There all information about chosen auditorium</h6>
                <p>Opened in 1988. Polytechnic University.</p>
                <p className="btmspace-30">Nothing special</p>
                <footer>
                    <p className="btmspace-5">Reserve on hours:</p>
                    <p className="btmspace-15"><input type="range" min="1" max="120" value="1" onchange="document.getElementById('rangeValue').innerHTML = this.value;" list="rangeList"/> <span id="rangeValue">1</span></p>
                    <Link className="btn" to="#">Choose &raquo;</Link>
                </footer>
                </div>
            </div>
        </div>
        <img className="img" src="https://s.pfst.net/2015.08/822545665672298f66b34724d267c0f3bf2b68adbbc5_b.jpg" alt="Audience" width="300" height="200"/>

    </div>
    )
  }
}
