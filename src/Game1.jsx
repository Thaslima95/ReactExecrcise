import React from "react";
import { useState, useEffect } from "react";

import Playerx from "./Playerx";
import Playery from "./Playery";

export default function Game1() {
  const [xIsNext, setXIsNext] = useState(true);
  const comibinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(
    JSON.parse(localStorage.getItem("tictactoe")) || [
      ("", "", "", "", "", "", "", "", ""),
    ]
  );

  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkTie();
    checkWin();

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    localStorage.setItem("tictactoe", JSON.stringify(board));
  }, [board]);
  useEffect(() => {
    let stateboard = JSON.parse(localStorage.getItem("tictactoe"));
    console.log(stateboard);
    if (stateboard) {
      setBoard(stateboard);
    }
  }, []);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      reset();
    }
  }, [result]);

  const chooseBox = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          console.log(player);
          return player;
        }
        return val;
      })
    );
    setXIsNext(!xIsNext);
  };
  const checkWin = () => {
    comibinations.forEach((current) => {
      // console.log(current);
      console.log(board[current[0]] + "board");
      const firstPlayer = board[current[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      current.forEach((idx) => {
        // console.log(board[idx]);
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };
  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };
  const reset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
    setXIsNext(true);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Playerx
          chooseBox={(box) => chooseBox(box)}
          board={board}
          xIsNext={xIsNext}
          reset={reset}
          player={player}
        />
        <Playery
          chooseBox={(box) => chooseBox(box)}
          board={board}
          xIsNext={xIsNext}
          reset={reset}
          player={player}
        />
      </div>
    </>
  );
}
