import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import "./details.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);

  //fetching the data with id get from params
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  });

  // add to cart
  const addingHandler = (product) => {
    dispatch(AddToCart(product));
  };

  return (
    <div className="container details__wrapper p-4 d-flex align-items-center justify-content-between  ">
      <img
        src={product.image}
        className="mb-5 details__img"
        alt={product.title}
      />

      <div className="info__wrapper">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>{product.price} $</h4>
        {authState ? (
          <button className="btn" onClick={() => addingHandler(product)}>
            Add To Cart
          </button>
        ) : (
          <span>
            <Link className="text-dark p-2 " to="/login">
              Login
            </Link>
            |
            <Link className="text-dark p-2" to="/signup">
              Register
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
