// creo el contexto
import { createContext, useState } from "react";

export const CartContext = createContext();

// creo el componente proveedor del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    // preguntar si existe
    let exist = isInCart(newProduct.id);

    if (exist) {
      let newArray = cart.map( product => {
        if(product.id === newProduct.id){
          return {
            ...product,
            quantity: newProduct.quantity
          }
        }else{
          return product
        }
      })
      setCart(newArray)

    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (id) => {
    // 2
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = ()=>{
    setCart( [] )
  }

  
  
  const removeById = ( id )=>{
    let newArray = cart.filter( (product)=> product.id !== id )
    setCart(newArray)
  }
  const getTotalQuantityById = (id)=>{
      let producto = cart.find( prod => prod.id === +id)
      console.log(producto?.quantity)
      return producto?.quantity
  }



  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalQuantityById
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
