import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => count > 1 && setCount(count - 1);
  const increment = () => count < stock && setCount(count + 1);

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <button onClick={() => onAdd(count)} className="add-to-cart">
        Agregar al carrito
      </button>
    </div>
  );
};
  
export default ItemCount;