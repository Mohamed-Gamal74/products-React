import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { FaShoppingCart } from "react-icons/fa";

const Products = ({ increase }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <div className=" container-fluid d-flex justify-content-center flex-wrap">
      {products.length ? (
        products.map((product) => {
          return (
            <div
              key={product.id}
              className="card m-2 p-2 text-center shadow rounded-2"
            >
              <img
                className="card-img-top"
                src={product.image}
                alt="Card image cap"
              />

              <div className="card-body">
                <div className="info">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text text-light">{product.category}</p>
                  <div className=" d-flex justify-content-between mt-5">
                    <p className="card-text fs-4">
                      price is : {product.price} $
                    </p>
                    <p className="card-text fs-4">
                      Rating: {product.rating.rate} / 5
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn  text-uppercase "
                  >
                    show Details
                  </Link>

                  <button className="btn cart" onClick={increase}>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div class="spinner-border text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      )}
    </div>
  );
};

export default Products;
