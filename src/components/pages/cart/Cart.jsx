import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, limpiar, removeById, total }) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button variant="contained" onClick={() => removeById(item.id)}>
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: </h3>
          <h3>Precio total: {total}</h3>
          <h3>Descuento: </h3>
          <h3>Precio final: </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiar} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}

          <h1>El total del carrito es ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
