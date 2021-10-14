import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => { 

    return ( 

        <nav> 
           <div>
              <ul>
                <li>
                    <NavLink to="/" activeClassName="App-link" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="App-link" exact>About</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="App-link" exact>Prodcuts</NavLink>
                </li> 
                <li>
                    <NavLink to="/cart" activeClassName="App-link" exact>Cart</NavLink>
                </li>
                <li> 
                    <NavLink to="/checkout" activeClassName="App-link" exact>Checkout</NavLink>
                </li>
              </ul> 
           </div>  
        </nav> 
    )

}

export default NavBar 