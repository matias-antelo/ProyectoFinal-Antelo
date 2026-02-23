import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/cartItem";
import Checkout from "./components/checkout/checkout";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
    </CartProvider >
  );
}

export default App;

