import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice()
  const limpiar = ()=>{
    
    Swal.fire({
      title: 'Seguro quieres limpiar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si, limpiar',
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Carrito limpio', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El carrito queda como estaba', '', 'info')
      }
    })

  }
  

  return (
    <div>
      <h2>El total del carrito es : {total}</h2>
      
      {
        cart.length > 0  && <button onClick={limpiar}>Limpiar carrito</button> 
      }

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
