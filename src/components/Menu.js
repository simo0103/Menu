import React, { Component } from 'react';
import Api from '../api/api';
import { Link } from 'react-router-dom';

class Menu extends Component {
   
  render() {
    return (
      <div>
        <ul className="pizzaList">
          {
            Api.allPizza().map(p => (
              //mettergli il key senno da errore in console
              <li key={p.id}> 
                <span className="name">{p.name}</span>
                <span className="price">{p.price}€</span> 
                <button>-1</button>
                <button>+1</button>
              </li>
            ))
          }
        </ul>
        <ul className="burgerList">
          {
            Api.allHamburger().map(h => (
              <li key={h.id}> 
                <span className="name">{h.name}</span>
                <span className="price">{h.price}€</span> 
                <button>-1</button>
                <button>+1</button>
              </li>
            ))
          }
        </ul>
        <Link to='/home'>Back</Link>
       
      </div>
    );
  }
}

export default Menu;
