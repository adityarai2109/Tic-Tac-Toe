import React, { useState } from "react";
import "./Game.css";

export default function Game(props) {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [matrix, setMatrix] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
        if (matrix[i][2] === 1) return 1;
        else if (matrix[i][2] === 0) return 0;
      }
      if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
        if (matrix[2][i] === 1) return 1;
        else if (matrix[2][i] === 0) return 0;
      }
    }
    if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
      if (matrix[2][2] === 1) return 1;
      else if (matrix[2][2] === 0) return 0;
    }
    if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
      if (matrix[2][0] === 1) return 1;
      else if (matrix[2][0] === 0) return 0;
    }
    return -1;
  }

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
      props.setCount(props.count + 1);

      // matrix filling
      let i = parseInt(index / 3);
      let j = parseInt(index % 3);
      if (props.player) {
        let newMatrix = matrix;
        newMatrix[i][j] = 1;
        setMatrix(newMatrix);
      } else {
        let newMatrix = matrix;
        newMatrix[i][j] = 0;
        setMatrix(newMatrix);
      }

      let ans = checkWinner();
      if (ans !== -1) {
        props.setDone(!props.done);
      }
      if (ans === 1) {
        props.setWinner(props.names[1]);
      } else if (ans === 0) {
        props.setWinner(props.names[0]);
      }
    }
    console.table(matrix);
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
      {
        /*!props.done &&*/ <div className="game">
          {array.map((i) => Cell(i))}
        </div>
      }
      {(props.done || props.count === 9) && (
        <button
          className="refresh"
          onClick={() => {
            setArr(["", "", "", "", "", "", "", "", ""]);
            props.setProceed(true);
            props.setNames(["Player 1 ", "Player 2 "]);
            props.setDone(false);
            props.setCount(0);
          }}
        >
          Refresh
        </button>
      )}
    </>
  );
}
