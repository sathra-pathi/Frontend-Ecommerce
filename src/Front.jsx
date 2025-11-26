import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import './Front.css'

function Front(){
    
    return(
        <>
        <div className='nav'>
            <nav>
  <img src={logo} className="logo" />

  <input className='input' type="text" placeholder='Search' />

  <div className="links">
    <a href="/">Home</a>
    <a href="/products">Products</a>
    <a href="/cart">Cart</a>
  </div>

  <div id="sel">
    <select>
      <option>Sort</option>
      <option>1000 to 2000</option>
      <option>2000 to 5000</option>
      <option>Above 5000</option>
    </select>

    <a className="sign" href="">Sign in</a>
  </div>
</nav>

        </div><br />
        
        </>
    );
    
}
export default Front;