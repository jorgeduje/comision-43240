import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";

const objetoLoader = {
  display: "block",
  margin: "0 auto",
  border: "2px solid red",
};

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(items.length);

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 500);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ScaleLoader cssOverride={objetoLoader} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      <ProductsListPresentacional items={items} />
      {/* {items.length > 0 ? (
        <ProductsListPresentacional items={items} />
      ) : (
        <ScaleLoader cssOverride={objetoLoader} color="#36d7b7" />
      )} */}

      {/* {items.length > 0 && <ProductsListPresentacional items={items} />} */}
    </div>
  );
};

export default ProductsListContainer;
