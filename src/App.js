import React from "react";
import "./App.css";
import DynamicEvent from "./Components/DynamicEvent";
import PassingProps from "./Components/PassingProps";
import Fruits from "./Components/ManagingState/Fruits";
import FruitsCounter from "./Components/ManagingState/FruitsCounter";
import { useState } from "react";
import YoutubeVideo from './Components/React-player/YoutubeVideo'
import Songselection from './Components/SongSelection/SongSelection';
import Calculator from "./Components/Calculator/Calculator";
import List from "./Components/List/List";

function App() {

  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "peach", id: 2 },
    { fruitName: "apple", id: 3 },
    { fruitName: "mango", id: 4 },
    { fruitName: "mango", id: 5 },
    { fruitName: "mango", id: 6 },
    { fruitName: "Olive tree", id: 7 },
    { fruitName: "lemon", id: 8 },
  ]);
  
  const desserts = [
    { name: "Ice Cream", calories: 200 },
    { name: "Tiramisu", calories: 300 },
    { name: "Lemon Cake", calories: 600 },
    { name: "Chocolate Cake", calories: 400 },
  ];

  return (
    <div className="App">
      <PassingProps firstName="Roy" lastName="Matar" />
      <DynamicEvent />
      <h1>Fruits:</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
      <YoutubeVideo/>
      <Songselection/>
      <Calculator/>
      <List desserts={desserts}/>
    </div>
  );
}

export default App;
