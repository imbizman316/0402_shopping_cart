import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = React.useState([]);

  console.log(products);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <Link
              key={product.id}
              className="product-card"
              to={`${product.id}`}
            >
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>${product.price}</h5>
            </Link>
          );
        })
      ) : (
        <h3>Loading....</h3>
      )}
    </div>
  );
}

export default Shop;
