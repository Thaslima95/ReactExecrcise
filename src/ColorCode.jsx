import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

export default function ColorCode() {
  const [code, setCode] = useState("");
  const [colorcode, setColorcode] = useState([]);
  const [playAgain, setPlayAgain] = useState(false);
  const [message, setMessage] = useState("");

  let hexString = "0123456789abcdef";
  useEffect(() => {
    const generator = () => {
      let hexcode = "#";
      for (let i = 0; i < 6; i++) {
        hexcode += hexString[Math.floor(Math.random() * hexString.length)];
      }
      colorcode.push(hexcode);
    };
    while (colorcode.length < 3) {
      generator();
    }
    setCode(colorcode[Math.floor(Math.random() * 3)]);
    setColorcode(colorcode.sort(() => Math.random() - 0.5));
  }, [colorcode]);
  const match = (e) => {
    if (e == code) {
      setMessage("Correct !");
      setPlayAgain(true);
    } else {
      setMessage("Incorrect !");
      setPlayAgain(true);
    }
  };

  return (
    <div>
      <div style={{ color: "black" }}>Hex Code : {code}</div>

      {colorcode.map((e) => (
        <div
          className="colors"
          style={{ background: e }}
          key={e}
          onClick={() => match(e)}
        ></div>
      ))}
      {message ? (
        <p style={{ color: "red", fontSize: "20px" }}>{message}</p>
      ) : (
        " "
      )}
      <div>
        {playAgain ? (
          <button onClick={() => window.location.reload(true)}>
            PlayAgain
          </button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
