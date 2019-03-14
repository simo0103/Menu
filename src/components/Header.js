import React, { Component } from 'react';
import { Link } from "react-router-dom";

//token d4itqdmz67bhsnpymefac5jaalrygikz4fhhsmkp2p4hm7vj3b7q
class Header extends Component {
  render() {
    return (
      <header>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/menu'>Menu</Link></li>
                  <li><Link to='/contacts'>Contacts</Link></li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
