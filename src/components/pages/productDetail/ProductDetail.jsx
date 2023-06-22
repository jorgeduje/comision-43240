import { Link } from "react-router-dom";
import { ItemCount } from "../../common/ItemCount";
import styles from "./ProductDetail.module.css";
import { Button } from "@mui/material";
const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <div>
      <div className={styles.containerItemDetail}>
        <div className={styles.containerImage}>
          <img src={productSelected.img} alt="" />
        </div>

        <div className={styles.containerDetail}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
            {productSelected.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
            {productSelected.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> $
            {productSelected.price}.-
          </h2>
        </div>
      </div>
      {productSelected.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemCount
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={cantidad}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}

      
    </div>
  );
};

export default ProductDetail;
