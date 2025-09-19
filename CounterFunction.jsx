import React, { useState } from "react";
function CounterFunction() {
    return (
        <div>
            <h2>Function Component</h2>
            <p>Count: {Count}</p>
            <button onClick={ () => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default CounterFunction;