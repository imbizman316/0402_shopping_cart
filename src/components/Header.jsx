import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h3>Logo</h3>
      <nav>
        <Link to=".">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
    </div>
  );
}

export default Header;
