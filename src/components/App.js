import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
