import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { products } from "../../../productsMock";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
      // reject( "la promesa salio mal ")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });

    // ASYNC - AWAIT
    // const getData = async () => {
    //   try {
    //     let res = await tarea;
    //     setFrase(res);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };

    // getData();
  }, []);

  return <ProductsListPresentacional items={items} />;
};

export default ProductsListContainer;
