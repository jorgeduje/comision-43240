import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";

import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      // los filtrados
      consulta = query(itemCollection, where("category", "==", categoryName))
    } else {
      // todos
      consulta = itemCollection
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));

  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScaleLoader color="steelblue" width={40} height={111} />
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
