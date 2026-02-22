import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getItems } from "../../firebase/db";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getItems(categoryId)
      .then(items => setProducts(items));
  }, [categoryId]);

  return <ItemList products={products} />;
}

export default ItemListContainer;