import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams().id;
  const [detailData, setDetailData] = React.useState(null);

  console.log(params);

  const getProductDetail = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params}`
      );
      const data = await response.json();
      console.log(data);
      setDetailData(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  React.useEffect(() => {
    getProductDetail();
  }, [params]);

  return detailData ? (
    <div className="product-detail">
      <img src={detailData.image} alt={detailData.title} />
      <div>
        <h3>{detailData.title}</h3>
        <h4>{detailData.description}</h4>
        <h1>${detailData.price}</h1>
        <input type="number"></input>
        <button>Add to cart</button>
      </div>
    </div>
  ) : (
    <div>
      <h2>Loading...</h2>
    </div>
  );
}

export default ProductDetail;
