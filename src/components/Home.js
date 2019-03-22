import React, { Component } from 'react';
import Slider from './utils/Slider';

class Home extends Component {
  render() {

    return (
      <div className="Home">
      <Slider></Slider>
        <div>
          {/* <img alt="" src={require("../images/ham1.jpg")} ></img> */}
        </div>
      </div>
        
    );
  }
}

export default Home;