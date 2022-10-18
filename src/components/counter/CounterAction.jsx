const CounterAction = ({ increaseValue, decreaseValue }) => {
  return (
    <>
      <button className="btn m-5" onClick={increaseValue}>
        increase +
      </button>

      <button className="btn bg-danger m-5" onClick={decreaseValue}>
        Decrease -
      </button>
    </>
  );
};

export default CounterAction;
