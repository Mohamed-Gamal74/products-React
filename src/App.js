import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Cart from "./components/cart";
import CounterContainer from "./components/counter";
import Home from "./components/home";
import Nav from "./components/navbar";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
