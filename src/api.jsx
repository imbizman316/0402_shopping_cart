export const getProductDetail = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  } catch (e) {
    console.log("error", e);
  }
};
