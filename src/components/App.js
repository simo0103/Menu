import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './pages/Main';
import Info from './pages/Info';
// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )


class App extends Component {
  constructor() {
    this.state = {
      data : ""
    }
  }

  onChangeLinkName(newName) {
    this.setState({
      data : newName
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main changeLink = {this.onChangeLinkName.bind(this)} />
        <Info data= {this.state.data}/>
      </div>
    );
  }
}

export default App;
