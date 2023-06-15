// creo el contexto
import { createContext, useState } from "react";

export const CartContext = createContext();

// creo el componente proveedor del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (newProduct) => {
    let exist = isInCart(newProduct.id);
    if (exist) {
      alert("ya existe")
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (id) => {
    // 2
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  let data = {
    cart: cart,
    agregarAlCarrito: agregarAlCarrito,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
