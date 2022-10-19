import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./details.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  //fetching the data with id get from params
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  });
  return (
    <div className="container details__wrapper p-4 d-flex align-items-center justify-content-between  ">
      <img src={product.image} className="mb-5 details__img" alt={product.title} />

      <div className="info__wrapper" >
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>{product.price} $</h4>
      </div>
    </div>
  );
};

export default ProductDetails;
