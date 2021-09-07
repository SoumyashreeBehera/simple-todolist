import React, { useState } from "react";

function Count({ value }) {
  const [count, setCount] = useState(value);

  function handlIncrease(e) {
    setCount(count + e);
  }
  return (
    <div>
      <h2>count: {count}</h2>
      <button
        onClick={() => {
          handlIncrease(1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          handlIncrease(-1);
        }}
      >
        Reduce 1
      </button>
    </div>
  );
}
export default Count;
