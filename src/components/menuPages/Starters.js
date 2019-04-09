import React, { Component } from 'react';
import Api from '../../api/api';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
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
          Api.allStarters().map(p => (            
            <NavLink to={p.name} activeClassName="selected" exact={true}><img alt={p.name} src={p.photo}></img></NavLink>       
          ))
        }
      </Slider>
      
      </div>
    );
  }
}

export default Starters;
