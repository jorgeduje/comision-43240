import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ProductsListContainer from "./components/pages/productsList/ProductsListContainer";

const App = () => {
  const [montado, setMontado] = useState(false);
  const [nombre, setNombre] = useState("pepito");

  return (
    <div>
      <Navbar />

      {montado && <ProductsListContainer nombre={nombre} />}

      <button onClick={() => setMontado(!montado)}>Montar componente</button>

      <button onClick={() => setNombre("maria")}>cambiar nombre</button>
    </div>
  );
};

export default App;
// ProductsList(nombre)
