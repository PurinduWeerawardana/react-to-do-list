import React, { useState } from "react";

function ToDoItem(props) {
  const [strike, setStrike] = useState(false);
  function handleClick() {
    setStrike((previousState) => {
      return !previousState;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: strike ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
