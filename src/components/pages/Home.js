import React, { Component } from 'react';
import Starters from '../menuPages/Starters';
import Hamburger from '../menuPages/Hamburger';
import Pizza from '../menuPages/Pizza';
import Dessert from '../menuPages/Dessert';
import '../../style/css/home.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import spaghetti from '../../images/spaghetti.png';
import pizza from '../../images/pizza.png';
import hamburger from '../../images/hamburger.png';



class Home extends Component {
  render() {
    return ( 
      <Router>
       <div className="Home">
        <ul>
          <li className="starters">
            <NavLink to="/" activeClassName="selected" exact={true}>starters</NavLink>
          </li>
          <li className="hamburgers">
            <NavLink to="/hamburger" activeClassName="selected">hambugers</NavLink>
          </li>
          <li className="pizza">
            <NavLink to="/pizza" activeClassName="selected">pizza</NavLink>
          </li>
          <li>
            <NavLink to="/dessert" activeClassName="selected">dessert</NavLink>
          </li>
        </ul>
        <Route exact path='/' component= {Starters}></Route>
        <Route exact path='/hamburger' component= {Hamburger}></Route>
        <Route exact path='/pizza' component= {Pizza}></Route>
        <Route exact path='/dessert' component= {Dessert}></Route>
        </div>
      </Router>

        
    );
  }
}

export default Home;