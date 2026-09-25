import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App()
{
  return (
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<h2>Detalle</h2>} />
        <Route path="/cart" element={<h2>Carrito</h2>} />
        <Route path="/checkout" element={<h2>Checkout</h2>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;