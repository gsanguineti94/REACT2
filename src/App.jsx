import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route}  from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar';
import Logo from './components/Home';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Logo />}/>
            <Route path='/productos' element={<ItemListContainer />}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
