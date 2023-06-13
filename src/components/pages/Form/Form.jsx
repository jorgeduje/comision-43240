import { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();

    // if( !userData.lastName.includes("@")){
    //     console.log("el campo email no es valido")
    //     return
    // }

    if(userData.name.length < 3){
        console.log("El nombre no puede ser menor a 3")
        return
    }

    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastName,
    };

    // mandarle info al back - para logearme
    console.log(data);
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };


  return (
    <div>
      <h2>Este es el formulario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
