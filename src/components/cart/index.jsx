import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../../assests/cart.webp";
import "./cart.css";
import { BsTrash } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import {
  deleteAllItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartState = useSelector((state) => state.addToCart.items);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  // to get the total price
  useEffect(() => {
    let t = 0;
    cartState.forEach((element) => {
      t += element.price * element.quantity;
    });
    setTotal(t);
  }, [cartState, cartState.quantity]);

  // to delete all the items form cart
  const deleteAllItemHandler = (cart) => {
    dispatch(deleteAllItem(cart));
  };

  // to delete item
  const deleteItemHandler = (cart) => {
    dispatch(deleteItem(cart));
  };

  // increase the quantity of item
  const increaseAmount = (cart) => {
    dispatch(increaseQuantity(cart));
  };

  // decrease the quantity of item
  const decreaseAmount = (cart) => {
    dispatch(decreaseQuantity(cart));
  };

  return (
    <>
      <h2 className="text-center cart__header text-uppercase mb-3">
        Cart Info
      </h2>

      {!!cartState.length && (
        <>
          <table className="table container table-striped  text-uppercase">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">image</th>
                <th scope="col">Total price</th>
                <th scope="col">quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {cartState.map((cart) => {
              return (
                <tbody key={cart.id}>
                  <tr>
                    <th scope="row">{cart.id}</th>
                    <td>{cart.title}</td>
                    <td>
                      <img src={cart.image} alt={cart.title} />
                    </td>
                    <td>{cart.price * cart.quantity} $</td>
                    <td>
                      <button
                        className="btn bg-danger  remove "
                        onClick={() => decreaseAmount(cart)}
                      >
                        <RiSubtractFill />
                      </button>
                      {cart.quantity}
                      <button
                        className="btn bg-success add "
                        onClick={() => increaseAmount(cart)}
                      >
                        <AiFillPlusCircle />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn bg-danger"
                        onClick={() => deleteItemHandler(cart)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div className="price__info text-light container d-flex align-items-center justify-content-between">
            <h4>
              Total price is : <span>{total.toFixed(2)}$</span>
            </h4>
            <button className="btn bg-danger" onClick={deleteAllItemHandler}>
              Delete All <BsTrash />
            </button>
          </div>
        </>
      )}
      {!cartState.length && (
        <div className="img__wrapper text-center  ">
          <img src={cart} alt="cart" />
          <h2 className="shop__now">
            <Link className="cartLink" to="/products">
              Go Shop now!
            </Link>
          </h2>
        </div>
      )}
    </>
  );
};

export default Cart;
