import { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);

  let increaseValue = () => {
    setValue(value++);
  };

  let decreaseValue = () => {
    value == 0 ? setValue(0) : setValue(value--);
  };
  return (
    <div className="d-flex align-items-center justify-content-center p-5 ">
      <button className="btn m-5" onClick={increaseValue}>
        increase +
      </button>
      <h2 className='m-5'>{value}</h2>
      <button className="btn bg-danger m-5" onClick={decreaseValue}>
        Decrease -
      </button>
    </div>
  );
};

export default Counter;
