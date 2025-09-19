import React, { useState, useEffect, useReducer } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer((s, a) => s + 1, 0);
  useEffect(() => console.log("Count changed:", count), [count]);

  return (
    <div>
      <p>useState Count: {count}</p>
      <p>useReducer Count: {state}</p>
      <button onClick={() => setCount(count + 1)}>+ State</button>
      <button onClick={() => dispatch()}>+ Reducer</button>
    </div>
  );
}