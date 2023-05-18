import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <h4>Imagen</h4>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <BsFillCartCheckFill color="steelblue" size="20px" />
    </div>
  );
};

export default Navbar;
