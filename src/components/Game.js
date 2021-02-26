import React, { useState } from "react";
import "./Game.css";
import CloseIcon from "@material-ui/icons/Close";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

export default function Game(props) {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  function Change(index) {
    props.setPlayer(!props.player);
    if (props.player) {
      let newArr = [...arr];
      newArr[index] = <CloseIcon />;
      setArr(newArr);
      //arr[index] = <CloseIcon />;
    } else {
      let newArr = [...arr];
      newArr[index] = <RadioButtonUncheckedIcon />;
      setArr(newArr);
      // arr[index] = <RadioButtonUncheckedIcon />;
    }
    console.log(arr);
  }
  return (
    <div className="game">
      <button className="buttons" onClick={() => Change(0)}>
        {arr[0]}
      </button>
      <button className="buttons" onClick={() => Change(1)}>
        {arr[1]}
      </button>
      <button className="buttons" onClick={() => Change(2)}>
        {arr[2]}
      </button>
      <button className="buttons" onClick={() => Change(3)}>
        {arr[3]}
      </button>
      <button className="buttons" onClick={() => Change(4)}>
        {arr[4]}
      </button>
      <button className="buttons" onClick={() => Change(5)}>
        {arr[5]}
      </button>
      <button className="buttons" onClick={() => Change(6)}>
        {arr[6]}
      </button>
      <button className="buttons" onClick={() => Change(7)}>
        {arr[7]}
      </button>
      <button className="buttons" onClick={() => Change(8)}>
        {arr[8]}
      </button>
    </div>
  );
}

// export default function Game(props) {
//   const [moves, setMoves] = useState([
//     { id: 0, value: false },
//     { id: 1, value: false },
//     { id: 2, value: false },
//     { id: 3, value: false },
//     { id: 4, value: false },
//     { id: 5, value: false },
//     { id: 6, value: false },
//     { id: 7, value: false },
//     { id: 8, value: false },
//   ]);
//   const [currentButton, setCurrentButton] = useState(0);

//   // moves.forEach((element) => console.log(element.id, element.value));

//   const block = () => {
//     let button = "";

//     function handleChange(e) {
//       console.log(e);
//       // setCurrentButton(e.target.value);
//       // console.log(currentButton);
//     }

//     const change = () => {
//       props.setPlayer(!props.player);
//       console.log(currentButton);

//       const chance = () => {
//         let newMoves = [...moves];
//         newMoves[currentButton].value = true;
//         setMoves(newMoves);
//         if (!moves.value) {
//           if (props.player) {
//             button = <CloseIcon />;
//           } else {
//             button = <RadioButtonUncheckedIcon />;
//           }
//         }
//       };
//       chance();

//       // console.table(moves);
//     };

//     return (
//       <>
//         <button className="buttons" onClick={change} onChange={handleChange}>
//           {button}
//         </button>
//       </>
//     );
//   };

//   return <div className="game">{moves.map(block)}</div>;
// }
