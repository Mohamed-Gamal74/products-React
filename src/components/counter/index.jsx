import CounterAction from "./CounterAction";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { increamentCount, decreaseCount } from "../../redux/counterSlice";

const CounterContainer = () => {
  // get the state from store whic initial is 0
  let globalState = useSelector((state) => state.counter.counter);

  const dispatch = useDispatch();

  const increaseValue = () => {
    dispatch(increamentCount(1));
  };

  const decreaseValue = () => {
    globalState > 0 ? dispatch(decreaseCount(1)) : (globalState = 0);
  };
  return (
    <div className="d-flex align-items-center justify-content-center p-5 ">
      <CounterAction
        increaseValue={increaseValue}
        decreaseValue={decreaseValue}
      />
      <Counter value={globalState} />
    </div>
  );
};

export default CounterContainer;
