import React from "react";

//this function filters the desserts that are less than 500 calories 
//lists the items from low to high

function List(props) {
  const lowCaloriesDesserts = props.desserts
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    .map((desserts) => {
      return (
        <li>
          {desserts.name} - {desserts.calories} cal
        </li>
      );
    });
  return <div>{lowCaloriesDesserts}</div>;
}

export default List;
