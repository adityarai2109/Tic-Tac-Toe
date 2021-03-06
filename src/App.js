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
  const [proceed, setProceed] = useState(true);
  const [done, setDone] = useState(false);
  const [winner, setWinner] = useState("Draw");
  const [count, setCount] = useState(0);

  const NamesHandler = (e, i) => {
    let newNames = [...names];
    newNames[i] = e;
    setNames(newNames);
  };

  return (
    <div className="App">
      <h1 className="heading">Tic Tac Toe</h1>
      <div className="content">
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
              CircleDark={CircleDark}
              CrossDark={CrossDark}
              done={done}
              setDone={setDone}
              winner={winner}
              setWinner={setWinner}
              count={count}
              setCount={setCount}
            />
            {!(done || count === 9) ? (
              <h3>
                {player ? (
                  <>
                    {names[0]} ( <img src={CrossLight} alt="X" width="18vw" /> )
                  </>
                ) : (
                  <>
                    {names[1]} ( <img src={CircleLight} alt="O" width="18vw" />{" "}
                    )
                  </>
                )}
                it's your chance
              </h3>
            ) : winner === "Draw" ? (
              <h3>{winner}</h3>
            ) : (
              <h3>{winner} won</h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
