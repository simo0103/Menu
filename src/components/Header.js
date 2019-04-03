import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../style/css/header.css';
import logo from '../images/logo.jpg';

//token d4itqdmz67bhsnpymefac5jaalrygikz4fhhsmkp2p4hm7vj3b7q
class Header extends Component {
  render() {
   // var isActive = this.context.router.route.location.pathname === this.props.to;
    var classActive =  'active' ;
    return (
      <header>
        <div className="logo">
        <img  src={logo}  alt="logo"/>
        </div>
          <nav>
              <ul>
                  <li><NavLink activeClassName={classActive} exact={true} to='/'>Home</NavLink></li>
                  <li><NavLink activeClassName={classActive} to='/about'>About</NavLink></li>
                  <li><NavLink activeClassName={classActive} to='/contacts'>Contacts</NavLink></li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
