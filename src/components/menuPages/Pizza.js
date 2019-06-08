import React, { Component } from 'react';
import Api from '../../api/api';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../../style/css/slider.css';



//https://css-tricks.com/understanding-react-setstate/
class Pizza extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      rows: 2
    };
    return (
      <div className="pizza">
       <Slider {...settings}>
       {
           Api.allPizza().map((p, key) => (
        <div className="slider-block">
          <div>
            {/* <img key={key} alt={p.name} src={p.photo}></img> */}
          </div>
        </div>
           ))
       }
       
        </Slider>
          <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default Pizza;
