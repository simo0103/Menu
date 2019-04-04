import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
          
            <ul>
                <li><NavLink  to='/'>Starters</NavLink></li>
                <li><NavLink  to='/hamburger' >Hamburgers</NavLink></li>
                <li><NavLink  to='/pizza'>Pizza</NavLink></li>
                <li><NavLink  to='/dessert'>Desserts</NavLink></li>
            </ul>
          
      </header>
    );
  }
}

export default Header;
