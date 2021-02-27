import React, { useState } from "react";
import "./Game.css";
import CloseIcon from "@material-ui/icons/Close";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

export default function Game(props) {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);

  function Change(index) {
    if (arr[index] === "") {
      props.setPlayer(!props.player);
      if (props.player) {
        let newArr = [...arr];
        newArr[index] = <CloseIcon fontSize="large" />;
        setArr(newArr);
      } else {
        let newArr = [...arr];
        newArr[index] = <RadioButtonUncheckedIcon fontSize="large" />;
        setArr(newArr);
      }
      setCount(count + 1);
      console.log(count);
    }
    console.log(arr);
    if (count === 8) props.Result();
  }

  return (
    <>
      <div className="game">
        <div className="button">
          <button className="buttons" onClick={() => Change(0)}>
            {arr[0]}
          </button>
        </div>
        <div className="button">
          <button className="buttons" onClick={() => Change(1)}>
            {arr[1]}
          </button>
        </div>
        <div className="button">
          <button className="buttons" onClick={() => Change(2)}>
            {arr[2]}
          </button>
        </div>
        <div className="button">
          <button className="buttons" onClick={() => Change(3)}>
            {arr[3]}
          </button>
        </div>

        <div className="button">
          <button className="buttons" onClick={() => Change(4)}>
            {arr[4]}
          </button>
        </div>
        <div className="button">
          <button className="buttons" onClick={() => Change(5)}>
            {arr[5]}
          </button>
        </div>
        <div className="button">
          <button className="buttons" onClick={() => Change(6)}>
            {arr[6]}
          </button>
        </div>
        <div className="button">
          <button className="buttons" onClick={() => Change(7)}>
            {arr[7]}
          </button>
        </div>
        <div className="button">
          <button className="buttons" onClick={() => Change(8)}>
            {arr[8]}
          </button>
        </div>
      </div>
      {
        // count === 9 &&
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
      }
    </>
  );
}
