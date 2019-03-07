import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contacts from './Contacts';

class Main extends Component {
  render() {
    return (
     <main>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/contacts' component={Contacts} />
       </Switch>
     </main>
    );
  }
}

export default Main;
