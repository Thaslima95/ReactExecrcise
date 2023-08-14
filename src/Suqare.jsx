import React from "react";

function Suqare({ val, chooseBox, color }) {
  return (
    <div className="grid-item" style={{ color: color }} onClick={chooseBox}>
      {val}
    </div>
  );
}

export default Suqare;
