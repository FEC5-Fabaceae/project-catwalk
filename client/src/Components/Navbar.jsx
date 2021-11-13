import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => (
  <div backgroundColor="dark" variant="dark" className="navbar">
    <div className="navbar-wrapper">
      <div className="navbar-cart">

        <a href="/"><FaShoppingCart color="white" fontSize="25px" /></a>
      </div>
      <div className="navbar-search">
        <form style={{
          width: '100%', align: 'right', display: 'flex', justifyContent: 'flex-end',
        }}
        >
          <input placeholder="search a product" />
        </form>
      </div>
    </div>
  </div>
);

export default Navbar;
