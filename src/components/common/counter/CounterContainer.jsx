import Counter from "./Counter"
import { useState } from "react";

const CounterContainer = () => {
    const [contador, setContador] = useState(0);

  return (
    <Counter contador={contador} setContador={setContador} />
  )
}

export default CounterContainer