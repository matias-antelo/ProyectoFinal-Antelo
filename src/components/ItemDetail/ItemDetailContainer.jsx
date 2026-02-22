import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { getItemById } from "../../firebase/db";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {

      getItemById(itemId)
      .then((data) => setProduct(data));
  }, [itemId]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;