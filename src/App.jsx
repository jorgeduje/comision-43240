import Navbar from "./components/layout/navbar/Navbar";
import { ProductsList } from "./components/pages/productsList/ProductsList";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductsList />
    </div>
  );
};

export default App;
// ProductsList(nombre)
