import React, { Component } from 'react';
import NavBar from './NavBar';
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
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
