import { useNavigate } from "react-router-dom";
import "./Item.css";

function Item({ prod }) {
  const navigate = useNavigate();

  return (
    <div className="item-card card bg-base-300 w-[90%] shadow-sm mb-8">
      <figure className="item-image">
        <img
          src={prod.url}
          alt={prod.name}
        />
      </figure>
      <div className="item-content card-body">
        <h2 className="item-title card-title">{prod.name}</h2>
        <p className="item-price">${prod.price}</p> 
        <p className="item-description">{prod.description}</p>
        <div className="card-actions justify-end">
          <button
            className="item-button btn btn-primary"
            onClick={() => navigate(`/item/${prod.id}`)}
          >Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;