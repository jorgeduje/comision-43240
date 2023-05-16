
import styles from "./Home.module.css"

const Home = () => {

  let mascota = {
    nombre: "jack",
    raza: "callejero",
    color: "blanco",
  };

  

  return (
    <div className={styles.container}>
      <h1 className={styles.card}>{mascota.nombre}</h1>
      <h3> {3 + 3} </h3>
    </div>
  );
};

export default Home;
