import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [cart, setCart] = React.useState([]);
  const [cartCount, setCartCount] = React.useState(0);

  function sendToCart(id, count, price, title, image) {
    if (cart.find((item) => item.id === id) === undefined) {
      // const temp = cart;
      let temp = cart;

      temp.push({
        id: id,
        count: count,
        price: price,
        title: title,
        image: image,
      });

      setCart(temp);
      setCartCount(cartCount + 1);
    } else {
      // cart.forEach((item) => {
      //   if (parseInt(item.id) === parseInt(id)) {
      //     console.log("Found it");
      //     temp.push({
      //       ...item,
      //       count: parseInt(count) + parseInt(item.count),
      //     });
      //     console.log(temp);
      //   }
      // });

      let temp = [];
      cart.forEach((each) => {
        if (each.id === id) {
          temp.push({ ...each, count: parseInt(each.count) + parseInt(count) });
        } else {
          temp.push({ ...each });
        }
      });

      setCart(temp);
    }

    console.log(cart);
  }

  function deleteCart(id, count, price, title, image) {
    setCart((prev) => {
      console.log(prev);
      const filtered = prev.filter((item) => item.id !== id);
      return filtered;
    });
    setCartCount(cartCount - 1);
  }

  function handleCount() {
    console.log("At least it's working");
  }

  function changeCount(id, newCount) {
    console.log(id);
    console.log(newCount);

    setCart((prev) => {
      const newPrev = prev.map((item) => {
        if (parseInt(item.id) === parseInt(id)) {
          return { ...item, count: newCount };
        } else {
          return { ...item };
        }
      });
      return newPrev;
    });
  }

  return (
    <div>
      {/* <Header cart={cart} /> */}
      <Header count={cartCount} handleCount={handleCount} />
      <div className="body">
        <Outlet
          context={[
            cart,
            setCart,
            sendToCart,
            deleteCart,
            changeCount,
            handleCount,
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
