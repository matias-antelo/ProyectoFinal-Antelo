import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Ir a ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tu Compra</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button className="btn btn-outline-danger" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <div className="text-end">
          <h3>Total: ${totalPrice()}</h3>
          <Link to="/checkout" className="btn btn-success mt-2">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;