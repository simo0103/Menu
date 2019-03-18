import React, { Component } from 'react';
import Api from '../api/api';
import { Link } from 'react-router-dom';
import '../style/css/menu.css';
//https://css-tricks.com/understanding-react-setstate/
class Menu extends Component {
  
  state = { itemList: [], pricelist: [], priceCounter: 0 }

  
//https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781

  addItem(item, price) {
    console.log('aggiungo ' + item + price);
    this.setState({itemList: this.state.itemList.concat([item])}); 
    this.setState({pricelist: this.state.pricelist.concat([price])});
    this.setState({priceCounter: this.state.priceCounter + price })
  }

  removeItem(item, price) {
    console.log('tolgo ' + item);
    var newItemList = [...this.state.itemList],
        newPriceLIst = [...this.state.pricelist],
        index = newItemList.indexOf(item),
        indexPrice = newPriceLIst.indexOf(price),
        newPriceCounter = [this.state.priceCounter];

    if (index !== -1 && newPriceCounter > 0) {
      newItemList.splice(index, 1);
      newPriceLIst.splice(indexPrice, 1);
      this.setState({itemList: newItemList});
      this.setState({pricelist: newPriceLIst});
      this.setState({ priceCounter: newPriceCounter - price })
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
                  <button onClick={()=> this.removeItem(p.name, p.price)}>-1</button>
                  <button onClick={()=> this.addItem(p.name, p.price)}>+1</button>
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
                  <button onClick={()=> this.removeItem(h.name, h.price)}>-1</button>
                  <button onClick={()=> this.addItem(h.name, h.price)}>+1</button>
                </li>
              ))
            }
          </ul>
        </div>
        
        <div className="cartList">
          <ul>
          {this.state.itemList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
           
          </ul>
          <ul>
          {this.state.pricelist.map((price, index) => (
            <li key={index}>{price}€</li>
          ))}
           
          </ul>
        </div>
        <div>Tot: {this.state.priceCounter}€</div>

        <Link to='/home'>Back</Link>
       
      </div>
    );
  }
}

export default Menu;
