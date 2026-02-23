import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";

const ItemDetail = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { addItem } = useContext(CartContext);
  if (!product) {
    return <p className="loading">Cargando detalle...</p>;
  }
  const onAdd = (quantity) => {
    setIsInCart(true);
    addItem(product, quantity);
  };
  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image">
          <img src={product.url} alt={product.name} />
        </div>

        <div className="item-detail-content">
          <h2 className="item-title">{product.name}</h2>
          <p className="item-description">{product.description}</p>
          <p className="item-price">${product.price}</p>
          <p className="item-description">{"Stock: " + product.stock}</p>

          <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;