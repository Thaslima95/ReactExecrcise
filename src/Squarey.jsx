import React from "react";

function Squarey({ val, chooseBox, xIsNext }) {
  const style = val == "X" ? "grid-itemboxx" : "grid-itemboxo";
  return (
    <button
      className={style}
      onClick={chooseBox}
      disabled={xIsNext ? true : false}
    >
      {val}
    </button>
  );
}

export default Squarey;
