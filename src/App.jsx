import Comments from "./components/Comments";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Navbar from "./components/layout/navbar/Navbar";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "./components/pages/productsList/ProductsListContainer";

const App = () => {
  return (
    <div>
      <Navbar>
        <ProductsListContainer />
        <ProductDetailContainer />
        <Users />
        <Comments />
        <Posts />
      </Navbar>
    </div>
  );
};

export default App;
