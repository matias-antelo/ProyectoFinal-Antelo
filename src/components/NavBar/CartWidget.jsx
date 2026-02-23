import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalUnits } = useContext(CartContext);
  const total = totalUnits();

  return (
    <Link to="/cart" className="btn btn-outline-secondary position-relative">
      <span className="fs-4">🛒</span>
      {total > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {total}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;