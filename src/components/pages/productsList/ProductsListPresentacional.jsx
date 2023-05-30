import ProductCard from "../../common/productCard/ProductCard";
import "./ProductsList.css"
const ProductsListPresentacional = ({ items }) => {
  // [{}, {}, {}]
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ProductsListPresentacional;
