import React from "react";

function Suqare({ val, chooseBox, xIsNext }) {
  const style = val == "X" ? "grid-itemboxx" : "grid-itemboxo";
  return (
    <button
      className={style}
      onClick={chooseBox}
      disabled={xIsNext ? false : true}
    >
      {val}
    </button>
  );
}

export default Suqare;
