import React from "react";

function Shop() {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <div key={product.id}>
              <h5>{product.title}</h5>
            </div>
          );
        })
      ) : (
        <h3>Loading....</h3>
      )}
    </div>
  );
}

export default Shop;
