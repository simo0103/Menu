import React, { Component } from 'react';
import Api from '../api/api';
import { Link } from 'react-router-dom';
import '../style/css/menu.css';
//https://css-tricks.com/understanding-react-setstate/
class Menu extends Component {
  state = { itemList: [] }
  addItem(item) {
    console.log('aggiungo ' + item);
    this.setState({itemList: this.state.itemList.concat([item])});    
  }
  removeItem(item) {
    console.log('tolgo ' + item);
    var newItemList = [...this.state.itemList];
    var index = newItemList.indexOf(item);
    if (index !== -1) {
      newItemList.splice(index, 1);
      this.setState({itemList: newItemList});
    }
  }
  render() {
 
    return (
      <div className="menu">
        <div>
          <ul className="pizzaList">Pizze
            {
              Api.allPizza().map(p => (
                //mettergli il key senno da errore in console
                <li key={p.id}> 
                  <span className="name">{p.name}</span>
                  <span className="price">{p.price}€</span> 
                  <button onClick={()=> this.removeItem(p.name)}>-1</button>
                  <button onClick={()=> this.addItem(p.name)}>+1</button>
                </li>
              ))
            }
          </ul>
          <ul className="burgerList">Hamburger
            {
              Api.allHamburger().map(h => (
                <li key={h.id}> 
                  <span className="name">{h.name}</span>
                  <span className="price">{h.price}€</span> 
                  <button onClick={()=> this.removeItem(h.name)}>-1</button>
                  <button onClick={()=> this.addItem(h.name)}>+1</button>
                </li>
              ))
            }
          </ul>
        </div>
        
        <div className="cartList">
        {this.state.itemList.length}

        {this.state.itemList}
        </div>
        
        <Link to='/home'>Back</Link>
       
      </div>
    );
  }
}

export default Menu;
