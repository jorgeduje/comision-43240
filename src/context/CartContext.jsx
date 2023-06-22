// creo el contexto
import { createContext, useState } from "react";

export const CartContext = createContext();

// localStorage.getItem("cart")
// localStorage.setItem("cart", [])

// creo el componente proveedor del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

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
      localStorage.setItem( "cart", JSON.stringify( newArray ) )
    } else {
      setCart([...cart, newProduct]);
      localStorage.setItem( "cart", JSON.stringify( [...cart, newProduct] ) )

    }
  };

  const isInCart = (id) => {
    // 2
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = ()=>{
    setCart( [] )
    localStorage.removeItem("cart")
  }

  
  
  const removeById = ( id )=>{
    let newArray = cart.filter( (product)=> product.id !== id )
    setCart(newArray)
    localStorage.setItem( "cart", JSON.stringify(newArray) )
  }
  const getTotalQuantityById = (id)=>{
      let producto = cart.find( prod => prod.id === +id)
      console.log(producto?.quantity)
      return producto?.quantity
  }

  const getTotalItems = ( )=>{

    let total = cart.reduce( (acc, elemento)=> {
      return acc + elemento.quantity
    }, 0)
    return total
  }

  const getTotalPrice = ()=>{

    let total = cart.reduce( (acc, elemento)=>{
      return acc + ( elemento.quantity * elemento.price)
    }, 0 )
    return total
  }



  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
