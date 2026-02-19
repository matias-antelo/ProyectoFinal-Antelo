import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <button className="add-to-cart">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;