import React from "react";

function Suqare({ val, chooseBox }) {
  const style = val == "X" ? "grid-itemboxx" : "grid-itemboxo";
  return (
    <div className={style} onClick={chooseBox}>
      {val}
    </div>
  );
}

export default Suqare;
