import React, { Component } from 'react';
import Api from '../../api/api';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import Slider from "react-slick";
import '../../style/css/slider.css';

//https://css-tricks.com/understanding-react-setstate/

class Starters extends Component {
 // state = { itemList: [], pricelist: [] }
  constructor() {
    super();
    this.state = {
      item: '',
      price: 0
    }
  }

  addItem(item, price) {
    this.setState({
      item : item,
      price : price
    })

  }

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
      <div className="menuList">
      <Slider {...settings}>
        {
          Api.allStarters().map(p => (            
            <div onClick={()=> this.addItem(p.name, p.price)}><img alt={p.name} src={p.photo}></img></div>       
          ))
        }
      </Slider>
      <div className="info">
        <p>info</p>
        <p>{this.state.item}</p>
  
        </div>
      </div>
    );
  }
}


export default Starters;
