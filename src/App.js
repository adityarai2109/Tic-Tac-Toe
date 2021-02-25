import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [player, setPlayer] = useState(true);
  return (
    <div className="App">
      <h1 className="heading">Tic Tac Toe</h1>
      <div className="content">
        <Game player={player} setPlayer={setPlayer} />
        <h3>{player ? "Player 1" : "Player 2"} its your chance</h3>
      </div>
    </div>
  );
}

export default App;
