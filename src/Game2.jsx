import React from "react";
import { Refresh } from "@styled-icons/foundation/Refresh";
import { useState, useEffect } from "react";
import Square from "./Square";
import { Playerfm } from "styled-icons/simple-icons";

export default function Game2() {
  const comibinations = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
    [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
    [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
    [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
    [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
    [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
    [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
    [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
    [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
    [0, 11, 22, 33, 44, 55, 66, 77, 88, 99],
    [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
  ];

  const [board, setBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

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
  }, [board]);
  //   useEffect(() => {
  //     let stateboard = JSON.parse(localStorage.getItem("tictactoe"));
  //     console.log(stateboard);
  //     if (stateboard) {
  //       setBoard(stateboard);
  //     }
  //   }, []);

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
  };
  const checkWin = () => {
    comibinations.forEach((current) => {
      console.log(current);
      console.log(board[current[0]] + "board");
      const firstPlayer = board[current[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      current.forEach((idx) => {
        console.log(board[idx]);
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
    setBoard([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);
    setPlayer("O");
  };
  return (
    <div className="maincontainer10">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <span
            style={{ fontSize: "20px", fontWeight: "900", color: "#31c3bd" }}
          >
            X
          </span>{" "}
          <span
            style={{ fontSize: "20px", fontWeight: "900", color: "#f2b137" }}
          >
            O
          </span>
        </div>
        <div className="turntitle">
          {player}
          <span style={{ fontSize: "10px" }}> &nbsp;Turn </span>
        </div>
        <div
          className="reverse"
          style={{ background: "#dbe8ed", color: "black" }}
        >
          <Refresh size="25" onClick={reset} />
        </div>
      </div>
      <div className="grid-container10">
        {[...new Array(100)].map((e, idx) => (
          <Square val={board[idx]} chooseBox={() => chooseBox(idx)} />
        ))}

        <div className="you">
          x(you)
          <br />0
        </div>
        <div className="ties">
          Ties
          <br />0
        </div>
        <div className="cpu">
          0(CPU)
          <br />0
        </div>
      </div>
    </div>
  );
}
