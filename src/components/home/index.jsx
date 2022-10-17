import "./home.css";
import shopping from "./shoppingcart.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center text-uppercase fw-bolder">
      <h1>Welcome to home page</h1>
      <p>
        Ready to see some awosome products?
       
          <Link className="link" to={"/products"}>Go To productS page now!</Link>
        
      </p>
      <img src={shopping} alt="shopping cart" />
    </div>
  );
};

export default Home;
