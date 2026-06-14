import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const addToCart = (product) => {
  const existingItem = cartItems.find(
    (item) => item.id === product.id
  );
   if (existingItem) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
   }else {
     setCartItems([
       ...cartItems,
       {
         ...product,
         quantity: 1
       }
      ]);
    }
  };
  const removeFromCart = (id) => {
   setCartItems(
     cartItems.filter(
       (item) => item.id !== id
     )
   );
  };
  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home search={search} />}
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart 
              cartItems={cartItems}
              removeFromCart={removeFromCart} />
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;