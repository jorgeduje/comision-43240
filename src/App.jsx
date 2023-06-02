import Navbar from "./components/layout/navbar/Navbar";
import FetchingDeDatosContainer from "./components/pages/fetchingDeDatos/FetchingDeDatosContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "./components/pages/productsList/ProductsListContainer";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* <ProductsListContainer /> */}
      <ProductDetailContainer />
      <FetchingDeDatosContainer />
    </div>
  );
};

export default App;
