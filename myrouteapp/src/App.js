import React from 'react'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
  
  <div>
   <h1> Brendan's Buying Bonanza </h1> 
   <NavBar /> 

    <Switch>
        <Route  path="/about" component={About} />
        <Route  path="/products" component={Products} />
        <Route  path="/cart" component={Cart} />
        <Route  path="/checkout" component={Checkout} />
        <Route  path="/checkout" component={Checkout} />
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
   
  )
}


export default App;
