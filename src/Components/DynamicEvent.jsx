import React from "react";

function DynamicEvent() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);

    let userInput = prompt("Guess a number from 1 to 10");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);}
    return (
      <div>
        <h1>DynamicEvent</h1>
        <button onClick={handleClick}>Guess the number between 1 and 10</button>
      </div>
    );
  
}

export default DynamicEvent;
