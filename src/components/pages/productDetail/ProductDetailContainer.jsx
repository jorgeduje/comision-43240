import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";


const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const {addToCart, getTotalQuantityById} = useContext(CartContext)

   const { id } = useParams()

   const cantidad = getTotalQuantityById(id)
   console.log("la cantidad es: " , cantidad)
  

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id); 

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);


  return <ProductDetail cantidad={cantidad} productSelected={productSelected} addToCart={addToCart}  />;
};

export default ProductDetailContainer;
