import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {

  const { getTotalItems } = useContext(CartContext)
  let totalItems = getTotalItems()
  
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">Comision-43240</Link>
        <ul className={styles.categories}>
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={totalItems} showZero color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
