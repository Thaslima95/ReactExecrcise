import React from "react";

function Suqare({ val, chooseBox, xIsNext }) {
  const style = val == "X" ? "grid-itemboxx" : "grid-itemboxo";
  return (
    <div
      className={style}
      onClick={chooseBox}
      disabled={xIsNext ? false : true}
    >
      {val}
    </div>
  );
}

export default Suqare;
