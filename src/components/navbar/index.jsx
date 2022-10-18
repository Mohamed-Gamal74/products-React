import { Link } from "react-router-dom";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Nav = () => {
  const globalState = useSelector((state) => state.counter.counter);
  const cartState = useSelector((state) => state.addToCart.counter);

  return (
    <nav className="navbar navbar-expand-lg w-100 mb-5 shadow ">
      <div className="container-fluid">
        <Link className="navbar-brand w-25" to="/">
          Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav   ">
            <li className="nav-item ">
              <Link
                className="nav-link pe-5  active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pe-5" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pe-5" to="/counter">
                support <span>{globalState} $</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pe-5" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pe-5" to="/cart">
                <FaShoppingCart className="text-light" />
                <span> {cartState} </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
