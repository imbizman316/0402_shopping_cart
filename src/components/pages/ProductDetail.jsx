import React from "react";
import {
  useParams,
  useSearchParams,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";
import { getProductDetail } from "../../api";

export function loader() {
  return getProductDetail();
}

function ProductDetail() {
  const params = useParams().id;
  const products = useLoaderData();

  const [cart, setCart, sendToCart, deleteCart, changeCount, handleCount] =
    useOutletContext();

  const target = products.filter(
    (product) => parseInt(product.id) === parseInt(params)
  );

  const [detailData, setDetailData] = React.useState(target[0]);
  const [count, setCount] = React.useState(1);
  const [price, setPrice] = React.useState(detailData.price);
  const [searchParams, setSearchParams] = useSearchParams();

  async function handlePrice() {
    setPrice((detailData.price * parseInt(count)).toFixed(2));
  }

  React.useEffect(() => {
    handlePrice();
  }, [count]);

  function handleCountChange(value) {
    setCount(value);
  }

  return (
    <div className="product-detail">
      <img src={detailData.image} alt={detailData.title} />
      <div>
        <h3>{detailData.title}</h3>
        <h4>{detailData.description}</h4>
        <h1>${price}</h1>
        <input
          type="number"
          value={count}
          onChange={(e) => handleCountChange(e.target.value)}
        ></input>
        <button
          onClick={() =>
            sendToCart(
              detailData.id,
              count,
              price,
              detailData.title,
              detailData.image
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
