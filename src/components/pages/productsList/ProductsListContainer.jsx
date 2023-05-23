import { useState, useEffect } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";

const ProductsListContainer = ({ nombre }) => {
  const [contador, setContador] = useState(0);

  console.log("El componente se actualiza");

  // useEffect

  // useEffect( ()=>{
  //   console.log("Se hace la peticion a la API")
  // } )

  useEffect(() => {
    console.log("Se hace la peticion a la API");
    // SETPRODUCTS con los datos
  }, []);

  useEffect(() => {
    console.log("Me ejecuto de forma condicional");
  }, [contador, nombre]);

  return (
    <ProductsListPresentacional contador={contador} setContador={setContador} />
  );
};

export default ProductsListContainer;
