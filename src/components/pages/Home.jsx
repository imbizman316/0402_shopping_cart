import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Shop your dream</h3>
      <Link to="shop">Start shopping</Link>
    </div>
  );
}

export default Home;
