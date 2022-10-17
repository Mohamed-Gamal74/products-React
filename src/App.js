import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Counter from "./components/counter";
import Home from "./components/home";
import Nav from "./components/navbar";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";


function App() {

  // to change the state of the cart icon
  let [val, setVal] = useState(0);
  let increase = () => {
    setVal(val++);
  };

  return (
    <BrowserRouter>
      <Nav val={val} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products increase={increase} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
