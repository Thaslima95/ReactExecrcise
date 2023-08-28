import React from "react";
import Squarey from "./Squarey";
import { Refresh } from "@styled-icons/foundation/Refresh";

export default function Playery(props) {
  const { chooseBox, board, xIsNext, reset, player } = props;
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
          <span style={{ fontSize: "10px" }}> &nbsp;Turn </span>
          {player}
        </div>
        <div
          className="reverse"
          style={{ background: "#dbe8ed", color: "black" }}
        >
          <Refresh size="25" onClick={reset} />
        </div>
        <Squarey
          val={board[0]}
          chooseBox={() => chooseBox(0)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[1]}
          chooseBox={() => chooseBox(1)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[2]}
          chooseBox={() => chooseBox(2)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[3]}
          chooseBox={() => chooseBox(3)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[4]}
          chooseBox={() => chooseBox(4)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[5]}
          chooseBox={() => chooseBox(5)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[6]}
          chooseBox={() => chooseBox(6)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[7]}
          chooseBox={() => chooseBox(7)}
          xIsNext={xIsNext}
        />
        <Squarey
          val={board[8]}
          chooseBox={() => chooseBox(8)}
          xIsNext={xIsNext}
        />
        <div className="you" style={{ width: "25px", fontSize: "10px" }}>
          x(you)
          <br />0
        </div>
        <div className="ties" style={{ width: "25px", fontSize: "10px" }}>
          Ties
          <br />0
        </div>
        <div className="cpu" style={{ width: "25px", fontSize: "10px" }}>
          0(CPU)
          <br />0
        </div>
      </div>
    </div>
  );
}
