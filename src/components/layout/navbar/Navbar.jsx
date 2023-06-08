import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = ({ children }) => {
  return (
    <>
      <div>
        <img
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1684852019/images_rysozf.jpg"
          alt=""
          style={{ width: "100px" }}
        />
        <ul>
          <li>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li>
        </ul>

        <Badge badgeContent={4} color="primary">
          <BsFillCartCheckFill color="steelblue" size="20px" />
        </Badge>
      </div>
      {children}
    </>
  );
};

export default Navbar;
