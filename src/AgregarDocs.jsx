import { addDoc, collection } from "@firebase/firestore"
import { products } from "./productsMock"
import { db } from "./firebaseConfig"

const AgregarDocs = () => {

    const rellenar = ()=>{

        let itemsCollections = collection(db, "products")

        products.forEach((elemento)=>{
            addDoc( itemsCollections, elemento )
        })

    }

  return (
    <div>
        <button onClick={rellenar}>Rellenar mi coleccion de productos</button>
    </div>
  )
}

export default AgregarDocs