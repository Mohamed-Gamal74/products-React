import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Cart from "./components/cart";
import CounterContainer from "./components/counter";
import Home from "./components/home";
import Nav from "./components/navbar";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";
import SignUp from "./components/signup";
import Login from './components/login'
import NotFound from './components/notfound'

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
