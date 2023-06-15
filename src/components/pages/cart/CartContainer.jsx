import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";



const CartContainer = () => {

  const {cart} = useContext(CartContext)
  console.log(cart)
 

  return (
    <div>
      <h1>Carritoooo</h1>
    </div>
  );
};

export default CartContainer;
