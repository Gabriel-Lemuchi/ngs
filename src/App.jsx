import React, { useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Cart from './components/cart/cart';
import Home from './pages/home/home';
import Torcedor from './pages/torcedor/torcedor';
import Infantil from './pages/infantil/infantil';
import Jogador from './pages/jogador/jogador';
import Retro from './pages/retro/retro';
import ProductDetail from './pages/productDetail/productDetail';
import Payment from "./pages/payment/payment";
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");

  const location = useLocation();

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  function toggleCart() {
    setCartOpen(prev => !prev);
  }

  function addToCart(product) {
    setCartItems(prev => {
      const itemExists = prev.find(item => item.name === product.name);

      if (itemExists) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prev, product];
    });

    setCartOpen(true);
  }

  function increase(name) {
    setCartItems(items =>
      items.map(item =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(name) {
    setCartItems(items =>
      items
        .map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <>
    <Header
      toggleMenu={toggleMenu}
      toggleCart={toggleCart}
      search={search}
      setSearch={setSearch}
    />

  <Sidebar menuOpen={menuOpen} />

    <Cart
      cartOpen={cartOpen}
      cartItems={cartItems}
      increase={increase}
      decrease={decrease}
      total={total}
    />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/torcedor" element={<Torcedor search={search} />} />
    <Route path="/jogador" element={<Jogador search={search} />} />
    <Route path="/infantil" element={<Infantil search={search} />} />
    <Route path="/retro" element={<Retro search={search} />} />
    <Route
      path="/produto/:slug"
      element={<ProductDetail addToCart={addToCart} />}
    />
    <Route path="/payment" element={<Payment cartItems={cartItems} total={total} />} />
    </Routes>
  </>
  );
}

export default App;
