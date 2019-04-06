import React, { Component } from 'react';
import Api from '../../api/api';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../../style/css/slider.css';



//https://css-tricks.com/understanding-react-setstate/
class Starters extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesPerRow: 2,
      rows: 2,
      variableWidth: true 
    };
    return (
      <div className="starters">
       <Slider {...settings}>
       {
           Api.allStarters().map(p => (
        <div className="slider-block">
          <p key={p.id}>{p.name}</p>
        </div>
           ))
       }
       
        </Slider>
          <Link to='/home'>Back</Link>
      </div>
    );
  }
}

export default Starters;
