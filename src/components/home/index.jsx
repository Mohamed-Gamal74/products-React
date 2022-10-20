import "./home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import welcome from "../../assests/welcome.jpg";

const Home = () => {
  const globalState = useSelector((state) => state.counter.counter);

  return (
    <div className="text-center text-uppercase fw-bolder">
      <img src={welcome} alt="welcome" className="welcomeImg" />
      <h5 className=" font-italic">
        Ready to see some awosome products?
        <Link className="link" to={"/products"}>
          Go To productS page now!
        </Link>
      </h5>
      <small >
        (You have to register or login to can add to your cart)
      </small>
      <h2 className="fw-bold mt-5">
        Total people Support <span>{globalState}$</span>
      </h2>
    </div>
  );
};

export default Home;
