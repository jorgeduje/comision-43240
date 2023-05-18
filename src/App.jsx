import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { ProductsList } from "./components/pages/productsList/ProductsList";

const App = () => {
  const [nombre, setNombre] = useState("pepe");
  const [isDark, setIsDark] = useState(false);

  console.log(isDark);

  let edad = 22;
  return (
    <div>
      <Navbar />
      <ProductsList nombre={nombre} edad={edad} />
      <button onClick={() => setNombre("maria")}>Cambiar nombre</button>
      <button onClick={() => setIsDark(!isDark)}>
       cambiar a {isDark ? "cambiar a claro" : "cambiar a oscuro"}
      </button>
    </div>
  );
};

export default App;
// ProductsList(nombre)

