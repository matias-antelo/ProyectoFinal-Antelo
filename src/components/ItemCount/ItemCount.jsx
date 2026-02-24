import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => count > 1 && setCount(count - 1);
  const increment = () => count < stock && setCount(count + 1);

  if (stock <= 0) {
    return (
      <div className="item-count">
        <p className="text-danger fw-bold alert alert-danger">Producto sin stock disponible</p>
      </div>
    );
  }

  return (
    <div className="item-count">
      <div className="counter d-flex align-items-center mb-3">
        <button
          className="btn btn-outline-secondary"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="mx-3 fs-4">{count}</span>
        <button
          className="btn btn-outline-secondary"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(count)}
        className="add-to-cart btn btn-primary w-100"
      >
        Agregar al carrito
      </button>

      <p className="text-muted mt-2 small">
        (Unidades disponibles para agregar: {stock})
      </p>
    </div>
  );
};

export default ItemCount;