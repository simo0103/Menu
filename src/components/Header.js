import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/css/header.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
library.add(faStarOfLife)


//token d4itqdmz67bhsnpymefac5jaalrygikz4fhhsmkp2p4hm7vj3b7q
class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <FontAwesomeIcon icon="star-of-life" />
          <h1>sitoesempio</h1>
          <h2>since 1994</h2>
        </div>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/contacts'>Contacts</Link></li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
