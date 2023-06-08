import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Comision-43240</Link>
        <ul className={styles.categories}>
          <Link to="/">Limpiar filtros</Link>
          <Link to="/category/urbanas">Urbanas</Link>
          <Link to="/category/deportivas">Deportivas</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
