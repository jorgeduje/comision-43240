import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  let id = 3;

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((res, rej) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productSelected)

  return <ProductDetail productSelected={productSelected}  />;
};

export default ProductDetailContainer;
