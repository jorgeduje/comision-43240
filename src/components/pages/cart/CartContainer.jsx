import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);
  

  return (
    <div>

      <button onClick={clearCart}>Limpiar carrito</button>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <button onClick={()=>removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartContainer;
