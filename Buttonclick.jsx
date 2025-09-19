import React from "react";

function ButtonClick() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default ButtonClick;