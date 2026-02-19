import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const url_base = "https://dummyjson.com/products";
    const url_categories = `https://dummyjson.com/products/category/${categoryId}`;

    fetch(categoryId ? url_categories : url_base)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [categoryId]);

  return <ItemList products={products} />;
}

export default ItemListContainer;