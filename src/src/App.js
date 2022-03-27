// import logo from './logo.svg';
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Game from "./components/Game";
import { useState } from "react";

const App = () => {
  // game pages
  const HOME = "HOME";

  const [page, setpage] = useState(HOME);
  const [gameState, setgameState] = useState(false);

  return (
    <>
      {page === HOME ? (
        <HomePage setpage={setpage} setgameState={setgameState} />
      ) : (
        <Game
          setpage={setpage}
          HOME={HOME}
          setgameState={setgameState}
          gameState={gameState}
        />
      )}
    </>
  );
};

export default App;
