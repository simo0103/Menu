import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';


class Main extends Component {
  render() {
    return (
     <main>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contacts' component={Contacts} />
       </Switch>
     </main>
    );
  }
}

export default Main;
