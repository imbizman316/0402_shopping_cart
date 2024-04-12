import React from "react";
import { Link } from "react-router-dom";

function Header({ count }) {
  return (
    <div className="header">
      <Link to=".">LOGO</Link>
      <nav className="header-nav">
        <Link to=".">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart: {count} </Link>
      </nav>
    </div>
  );
}

export default Header;
