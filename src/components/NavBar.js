import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../style/css/navbar.css';
import logo from '../images/logo.jpg';

class NavBar extends Component {
  render() {
    var classActive = 'active';
    return (
      <nav>
        <div className="logo">
        <img  src={logo}  alt="logo"/>
        </div>
          <nav>
              <ul>
                  <li><NavLink activeClassName={classActive} exact={true} to='/home'>Home</NavLink></li>
                  <li><NavLink activeClassName={classActive} to='/about'>About</NavLink></li>
                  <li><NavLink activeClassName={classActive} to='/contacts'>Contacts</NavLink></li>
              </ul>
          </nav>
        </nav>
    );
  }
}

export default NavBar;
