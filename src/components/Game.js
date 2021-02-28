import React, { useState } from "react";
import "./Game.css";

export default function Game(props) {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [count, setCount] = useState(0);

  function Change(index) {
    if (arr[index] === "") {
      props.setPlayer(!props.player);
      if (props.player) {
        let newArr = [...arr];
        newArr[index] = <img src={props.CrossDark} alt="X" />;
        setArr(newArr);
      } else {
        let newArr = [...arr];
        newArr[index] = <img src={props.CircleDark} alt="O" />;
        setArr(newArr);
      }
      setCount(count + 1);
      console.log(count);
    }
    console.log(arr);
    if (count === 8) props.Result();
  }

  const Cell = (i) => {
    return (
      <div className="button">
        <button className="buttons" onClick={() => Change(i)}>
          {arr[i]}
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="game">{array.map((i) => Cell(i))}</div>
      {count === 9 && (
        <button
          className="refresh"
          onClick={() => {
            setArr(["", "", "", "", "", "", "", "", ""]);
            setCount(0);
            props.setProceed(true);
            props.setNames(["Player 1 ", "Player 2 "]);
          }}
        >
          Refresh
        </button>
      )}
    </>
  );
}
