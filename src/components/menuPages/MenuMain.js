import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Starters from './Starters';
import Hamburger from './Hamburger';
import Pizza from './Pizza';
import Dessert from './Dessert';

class MenuMain extends Component {
  render() {

    return (
     <main>
       <Switch>
        <Route   exact path='/' component={Starters} />
        <Route   path='/hamburger' component={Hamburger} />
        <Route   path='/pizza' component={Pizza} />
        <Route   path='/dessert' component={Dessert} />
       </Switch>
     </main>
    );
  }
}

export default MenuMain;
