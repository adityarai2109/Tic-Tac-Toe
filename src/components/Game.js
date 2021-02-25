import React, { useState } from "react";
import "./Game.css";
import CloseIcon from "@material-ui/icons/Close";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

export default function Game(props) {
  const [moves, setMoves] = useState([
    { id: 0, value: false },
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
    { id: 6, value: false },
    { id: 7, value: false },
    { id: 8, value: false },
  ]);
  moves.forEach((element) => console.log(element.id, element.value));
  const block = () => {
    let button = "";

    const change = () => {
      props.setPlayer(!props.player);
      if (moves.value) {
        button = "";
      } else {
        if (props.player) {
          button = <CloseIcon />;
        } else {
          button = <RadioButtonUncheckedIcon />;
        }
      }
    };

    return (
      <>
        <button className="buttons" onClick={change}>
          {button}
        </button>
      </>
    );
  };

  return <div className="game">{moves.map(block)}</div>;
}
