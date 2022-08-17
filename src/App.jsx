import Navbar from './components/navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import Cart from "./components/Cart";
import Logo from './components/Home';
import './App.css';
import { BrowserRouter, Routes, Route}  from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Logo />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detalle' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
