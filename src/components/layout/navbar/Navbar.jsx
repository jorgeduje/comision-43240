import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
const Navbar = ({ children }) => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <h5>Comision 43240</h5>
        <ul className={styles.categories}>
          <li>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li>
        </ul>

        <Badge badgeContent={4}>
          <BsFillCartCheckFill size="30px" />
        </Badge>
      </div>
      {children}
    </>
  );
};

export default Navbar;
