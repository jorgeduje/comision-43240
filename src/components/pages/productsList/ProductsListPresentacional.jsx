const ProductsListPresentacional = ({ contador, setContador }) => {
  return (
    <>
      <h1>Aca van los productos</h1>

      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      {/* <Counter /> */}
    </>
  );
};

export default ProductsListPresentacional;
