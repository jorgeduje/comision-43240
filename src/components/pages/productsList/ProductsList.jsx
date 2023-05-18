import Counter from "../../common/counter/Counter";


export const ProductsList = ( {nombre, edad} ) => {
 
    
    
  return (
    <>
      <h1>Aca van los productos</h1>
      <h3>Holaaaaa {nombre}</h3>
      <h4>mi edad es {edad}</h4>
      <Counter />
    </>
  );
};
