import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state = {
    basket: 0,
    basketItems: []
  }

  addToBasket = (item) => {
    this.setState({
      basket: this.state.basket + 1,
      basketItems: [...this.state.basketItems, item]
    })
    console.log(this.state.basketItems);
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <Nav basketProp={this.state.basket}/>
          <Switch>
          <Route path="/about" component={About} />
          <Route path="/" render={() => <Home price={300} toBasket={this.addToBasket} item={"apple"} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
