import { BsFillCartCheckFill } from "react-icons/bs";

// import imagenLogo from "../../../assets/images/images.jpg"

const Navbar = () => {
  return (
    <div>
      <img
        // src={imagenLogo} // en la carpeta src
        // src="/public/images/images2.jpg" // en la carpeta public
        // url de internet
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1684852019/images_rysozf.jpg"
        alt=""
        style={{ width: "100px" }}
      />
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
