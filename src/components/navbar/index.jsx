import { Link } from "react-router-dom";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LogoutAction } from "../../redux/auth";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const globalState = useSelector((state) => state.counter.counter);
  const cartState = useSelector((state) => state.addToCart.counter);
  const authState = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(LogoutAction());
    navigate('/')
  };

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
            {authState ? (
              <li className="nav-item">
                <Link className="nav-link pe-5" to="/cart">
                  <FaShoppingCart className="text-light" />
                  <span> {cartState} </span>
                </Link>
              </li>
            ) : (
              ""
            )}

            {authState ? (
              ""
            ) : (
              <li className="nav-item ">
                <Link className="nav-link signup pe-5" to="/signup">
                  Register
                </Link>
              </li>
            )}

            {!authState ? (
              <li className="nav-item ">
                <Link className="nav-link login pe-5" to="/login">
                  LogIn
                </Link>
              </li>
            ) : (
              <li className="nav-item" onClick={logoutHandler}>
                <Link className="nav-link login pe-5">Logout</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
