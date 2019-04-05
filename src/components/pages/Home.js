import React, { Component } from 'react';
import Starters from '../menuPages/Starters';
import Hamburger from '../menuPages/Hamburger';
import Pizza from '../menuPages/Pizza';
import Dessert from '../menuPages/Dessert';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return ( 
      <Router>
       <div className="Home">
        <ul>
          <li>
            <Link to="/">starters</Link>
          </li>
          <li>
            <Link to="/hamburger">hambugers</Link>
          </li>
          <li>
            <Link to="/pizza">pizza</Link>
          </li>
          <li>
            <Link to="/dessert">dessert</Link>
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