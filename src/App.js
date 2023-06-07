import React from "react";
import "./App.css";
import DynamicEvent from "./Components/DynamicEvent";
import PassingProps from "./Components/PassingProps";
import Fruits from "./Components/ManagingState/Fruits";
import FruitsCounter from "./Components/ManagingState/FruitsCounter";
import { useState } from "react";



function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "peach", id: 2 },
    { fruitName: "apple", id: 3 },
    { fruitName: "mango", id: 4 },
  ]);
  
  return (
    <div className="App">
      <PassingProps firstName="Roy" lastName="Matar" />
      <DynamicEvent />
      <h1>Fruits:</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
