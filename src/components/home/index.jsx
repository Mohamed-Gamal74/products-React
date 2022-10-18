import "./home.css";
import shopping from "./shoppingcart.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const globalState = useSelector((state) => state.counter.counter);

  return (
    <div className="text-center text-uppercase fw-bolder">
      <h1>Welcome to home page</h1>
      <p>
        Ready to see some awosome products?
        <Link className="link" to={"/products"}>
          Go To productS page now!
        </Link>
      </p>
      <h2>Total people Support {globalState} $</h2>
      <img src={shopping} className='shopping__img' alt="shopping cart" />
    </div>
  );
};

export default Home;
