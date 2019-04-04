import React, { Component } from 'react';
import Header from '../Header';
import MenuMain from '../menuPages/MenuMain';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Header></Header> 
      <MenuMain></MenuMain>

      

      </div>
        
    );
  }
}

export default Home;