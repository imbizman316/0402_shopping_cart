import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const [cart, setCart, sendToCart, deleteCart, changeCount] =
    useOutletContext();

  const [total, setTotal] = useState(0);

  let tempTotal = 0;

  if (cart === undefined) {
    return <h5>Undefined Cart</h5>;
  }

  return (
    <div className="cart-origin">
      <div>
        {cart.map((item) => {
          tempTotal = tempTotal + item.count * item.price;
          return (
            <div key={item.id} className="cart">
              <div className="cart-top">
                <h2>{item.id}</h2>
                <h1
                  className="close_button"
                  onClick={() => {
                    deleteCart(
                      item.id,
                      item.count,
                      item.price,
                      item.title,
                      item.image
                    );
                  }}
                >
                  X
                </h1>
              </div>
              <div className="cart-container">
                <img src={item.image} alt={item.title}></img>
                <div>
                  <h4>{item.title}</h4>
                  <h4>count: {item.count}</h4>
                  <input
                    type="number"
                    value={item.count}
                    onChange={(e) => changeCount(item.id, e.target.value)}
                  />
                  <h4>price: ${item.price}</h4>
                  <hr height="200px" width="100px" />
                  <h3>sub-total: ${(item.count * item.price).toFixed(2)}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Total: ${tempTotal.toFixed(2)}</h1>
        <button>Check Out</button>
      </div>
    </div>
  );
}

export default Cart;
