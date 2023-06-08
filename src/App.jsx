
import Navbar from "./components/layout/navbar/Navbar";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "./components/pages/productsList/ProductsListContainer";

const App = () => {
  return (
    <div>
      <Navbar>
        <ProductsListContainer />
        <ProductDetailContainer />
      </Navbar>
    </div>
  );
};

export default App;
