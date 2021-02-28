import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import CircleDark from "./MovesImages/CircleDark.svg";
import CrossDark from "./MovesImages/CrossDark.svg";
import CircleLight from "./MovesImages/CircleLight.svg";
import CrossLight from "./MovesImages/CrossLight.svg";

function App() {
  const [player, setPlayer] = useState(Math.random() >= 0.5);
  const [names, setNames] = useState(["Player 1 ", "Player 2 "]);
  const [draw, setDraw] = useState(false);

  const [proceed, setProceed] = useState(true);

  let O = <img src={CircleDark} alt="O" />;
  let X = <img src={CrossDark} alt="X" />;

  const NamesHandler = (e, i) => {
    let newNames = [...names];
    newNames[i] = e;
    setNames(newNames);
  };

  const Result = () => {
    console.log("result");
    if (draw) {
      console.log("draw");
    } else {
      console.log("player won");
    }
    return <div></div>;
  };

  return (
    <div className="App">
      <h1 className="heading">Tic Tac Toe</h1>
      {proceed && (
        <form className="form">
          <div className="names">
            <div className="details">
              <fieldset>
                <legend>
                  <b>
                    {"\xa0"}Player 1{"\xa0"}
                  </b>
                </legend>
                <p>Enter your name</p>
                <input
                  type="text"
                  className="input"
                  placeholder="Hello Player 1"
                  onChange={(e) => NamesHandler(e.target.value, 0)}
                />
              </fieldset>
            </div>
            <div className="details">
              <fieldset>
                <legend>
                  <b>
                    {"\xa0"}Player 2{"\xa0"}
                  </b>
                </legend>
                <p>Enter your name</p>
                <input
                  type="text"
                  className="input"
                  placeholder="Hello Player 2"
                  onChange={(e) => NamesHandler(e.target.value, 1)}
                />
              </fieldset>
            </div>
          </div>
          <h4>
            Writing name is optional,
            <br /> but you should write your name
            <br /> for better experience
          </h4>
          <button className="submit" onClick={() => setProceed(false)}>
            Submit
          </button>
        </form>
      )}

      {!proceed && (
        <div className="content">
          <Game
            player={player}
            setPlayer={setPlayer}
            proceed={proceed}
            setProceed={setProceed}
            names={names}
            setNames={setNames}
            Result={Result}
            CircleDark={CircleDark}
            CrossDark={CrossDark}
          />

          <h3>
            {player ? (
              <>
                {names[0]} <img src={CircleLight} alt="O" />
              </>
            ) : (
              <>
                {names[1]} <img src={CrossLight} alt="X" />
              </>
            )}
            its your chance
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
