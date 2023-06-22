import { Button } from "@mui/material";
import { useCount } from "../hooks/useCount";

export const ItemCount = ({ stock, initial=1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div className="count--container">
        <Button disabled={stock < 1 ? true : false} variant="contained" onClick={decrement}>-</Button>
        <h2>{count}</h2>
        <Button disabled={stock < 1 ? true : false} variant="contained" onClick={increment}>+</Button>

        <Button variant="contained" onClick={() => onAdd(count)}>Agregar al carrito</Button>
      </div>
    </>
  );
};
