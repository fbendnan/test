import React, { useState } from "react";

function Counter() {
  //state typed as a  number
  const [count, setCount] = useState<number>(0);

  //function to increment counter
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(0)}>Rest</button>
    </div>
  );
}

export default Counter;


