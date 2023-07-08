import React from "react";
import "./App.css";
import DynamicEvent from "./Components/DynamicEvent";
import PassingProps from "./Components/PassingProps";
import Fruits from "./Components/ManagingState/Fruits";
import FruitsCounter from "./Components/ManagingState/FruitsCounter";
import { useState, useContext } from "react";
import YoutubeVideo from "./Components/React-player/YoutubeVideo";
import Songselection from "./Components/SongSelection/SongSelection";
import Calculator from "./Components/Calculator/Calculator";
import List from "./Components/List/List";
import { ThemeContext } from "./Components/light-dark theme/Context";
import GiftCard from "./Components/ManagingState2.jsx/GiftCard";
import TitleChange from "./Components/useEffect/TitleChange";
import FetchingData from "./Components/FetchingData/FetchingData";
import FetchingRandomUser from "./Components/FetchingRandomUser/FetchingRandomUser";
import Reducer from "./Components/useReducer/Reducer";
import AccessDom from "./Components/useRef/AccessDom";
import Radio from "./Components/RadioGroup/RadioGroup";
import CursorPosition from "./Components/CursorPosition/CursorPosition";
import CursorPosition2 from "./Components/CursorPosition/CursorPosition2";
import Pagination from "./Components/Pagination/CryptoList";
import CryptoList from "./Components/Pagination/CryptoList";

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

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <PassingProps firstName="Roy" lastName="Matar" />
      <DynamicEvent />
      <h1>Fruits:</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
      <YoutubeVideo />
      <Songselection />
      <Calculator />
      <List desserts={desserts} />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <GiftCard />
      <TitleChange />
      <FetchingData />
      <FetchingRandomUser />
      <Reducer />
      <CursorPosition />
      <AccessDom />
      <Radio />
      <CursorPosition2 />
      <CryptoList />
    </div>
  );
}

export default App;
