import React from "react";

function Fruits(props) {
  return (
    <div>
      {props.fruits.map((f) => (
        <p key={f.key}>{f.fruitName}</p>
      ))}
    </div>
  );
}

export default Fruits;
