import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <section class="d-flex flex-column align-items-center justify-content-center">
      <h1 class=" text-dark notFound">
        4<span>0</span>4
      </h1>
      <p class=" fs-1">Oops! Something is wrong.</p>
      <Link class="shadow fs-4 fw-bold goHome" to="/">
         Home Page
      </Link>
    </section>
  );
};

export default NotFound;
