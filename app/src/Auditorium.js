import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './html_css/styles/layout.css'

export default class Auditorium extends Component {
  render() {
    return (
    <div>
          <div class="hoc container clear">
            <div>
                <div class="one_half first">
                <h6 class="heading">There all information about chosen auditorium</h6>
                <p>Opened in 1988. Polytechnic University.</p>
                <p class="btmspace-30">Nothing special</p>
                <footer>
                    <p class="btmspace-5">Reserve on hours:</p>
                    <p class="btmspace-15"><input type="range" min="1" max="120" value="1" onchange="document.getElementById('rangeValue').innerHTML = this.value;" list="rangeList"/> <span id="rangeValue">1</span></p>
                    <Link class="btn" to="#">Choose &raquo;</Link>
                </footer>
                </div>
            </div>
        </div>
        <img class="img" src="https://s.pfst.net/2015.08/822545665672298f66b34724d267c0f3bf2b68adbbc5_b.jpg" alt="Audience" width="300" height="200"/>

    </div>
    )
  }
}
