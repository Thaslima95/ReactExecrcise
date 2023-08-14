import React from "react";
import { Refresh } from "@styled-icons/foundation/Refresh";
import { useState, useEffect } from "react";
import Suqare from "./Suqare";

export default function Game() {
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
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [color, setColor] = useState("#f2b137");
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkTie();
    checkWin();

    if (player == "X") {
      setPlayer("O");
      setColor("#f2b137");
    } else {
      setPlayer("X");
      setColor("#31c3bd");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
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
        reset();
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
  };
  return (
    <div className="maincontainer">
      <div className="grid-container">
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
        <Suqare val={board[0]} chooseBox={() => chooseBox(0)} color={color} />
        <Suqare val={board[1]} chooseBox={() => chooseBox(1)} color={color} />
        <Suqare val={board[2]} chooseBox={() => chooseBox(2)} color={color} />
        <Suqare val={board[3]} chooseBox={() => chooseBox(3)} color={color} />
        <Suqare val={board[4]} chooseBox={() => chooseBox(4)} color={color} />
        <Suqare val={board[5]} chooseBox={() => chooseBox(5)} color={color} />
        <Suqare val={board[6]} chooseBox={() => chooseBox(6)} color={color} />
        <Suqare val={board[7]} chooseBox={() => chooseBox(7)} color={color} />
        <Suqare val={board[8]} chooseBox={() => chooseBox(8)} color={color} />
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
