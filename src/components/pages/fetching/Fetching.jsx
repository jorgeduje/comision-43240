import { useEffect, useState } from "react";
import { productAxios } from "../../../api/axiosInstance";

productAxios;

const Fetching = () => {
  const [products, setProducts] = useState([]);

  // GET ALL
  useEffect(() => {
    const getData = productAxios.get("");
    getData
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // GET BY ID
  useEffect(() => {
    const getProduct = productAxios.get("/1");
    getProduct.then((res) => console.log(res.data));
  }, []);

  // CREATE
  const createProduct = () => {
    let data = {
      title: "zapatillas creadas con axios",
      price: 15000,
      stock: 2,
      description: "Estas son las mejores zapatillas",
      category: "deportivas",
      img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png",
    };

    const promiseCreate = productAxios.post("", data);
    promiseCreate
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // PUT

  const cambiarTodoElProducto = () => {
    let data = {
      title: "zapatillas creadas con axios",
      price: 2500,
      stock: 2,
      description: "Estas son las mejores zapatillas",
      category: "deportivas",
      img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png",
    };
    productAxios.put("/5", data);
  };

  // PATCH
  const cambiarParteDelProducto = () => {
    let data = {
      title: "cambiado con patch",
    };
    productAxios.patch("/6", data);
  };

  // DELETE

  const eliminarProducto = () => {
    productAxios.delete("/5");
  };

  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}

      <button onClick={createProduct}>Crear producto</button>
      <button onClick={cambiarTodoElProducto}>Modificar con put</button>
      <button onClick={cambiarParteDelProducto}>Modificar con patch</button>
      <button onClick={eliminarProducto}>Eliminar producto</button>
    </div>
  );
};

export default Fetching;
