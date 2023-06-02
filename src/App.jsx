import { Typography } from "@mui/material";
import Navbar from "./components/layout/navbar/Navbar";
import Fetching from "./components/pages/fetching/Fetching";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "./components/pages/productsList/ProductsListContainer";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ProductsListContainer /> */}
      {/* <ProductDetailContainer /> */}
      <Typography variant="h1" color="primary.secondary">Holaaaaaaa</Typography>
      <Fetching />
    </div>
  );
};

export default App;
