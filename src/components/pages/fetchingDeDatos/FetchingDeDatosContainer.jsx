import { useEffect, useState } from "react";
import FetchingDeDatos from "./FetchingDeDatos";

const FetchingDeDatosContainer = () => {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    promiseData
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("este es el error: ", err));
  }, []);

  const createUser = () => {
    let data = {
      name: "pepito",
      userName: "perez",
      email: "pepito@gmail.com",
    };

    const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    });

    promise
      .then((res) => res.json())
      .then((data) =>
        console.log(
          "El usuario fue creado con la siguiente informacion: ",
          data
        )
      ).catch(err => console.log(err))
  };

  return <FetchingDeDatos users={users} createUser={createUser} />;
};

export default FetchingDeDatosContainer;
