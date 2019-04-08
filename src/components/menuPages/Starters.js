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
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      rows: 2
    };
    return (
      <div className="starters">
       <Slider {...settings}>
       {
           Api.allStarters().map((p, key) => (
        <div className="slider-block">
          <div><img key={key} alt={p.name} src={p.photo}></img></div>
        </div>
           ))
       }
       
        </Slider>
          {/* <Link to='/home'>Back</Link> */}
      </div>
    );
  }
}

export default Starters;
