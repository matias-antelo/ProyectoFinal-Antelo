import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";

const ItemDetail = ({ product }) => {
  if (!product) {
    return <p className="loading">Cargando detalle...</p>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="item-detail-content">
          <h2 className="item-title">{product.title}</h2>
          <p className="item-description">{product.description}</p>
          <p className="item-price">${product.price}</p>

          <ItemCount stock={product.stock} className="item-count" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;