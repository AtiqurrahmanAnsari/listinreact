import React from "react";
import "./styles.css";

var shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  "Flowers",
  "Pasta",
  "Real Juice",
  "Kellogs",
  "Wheat Atta"
];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  function listItemClickHandler(item) {
    console.log("clicked", item);
  }

  return (
    <div className="App">
      <h1>Print my shoppingList</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              onClick={() => listItemClickHandler(item)}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
