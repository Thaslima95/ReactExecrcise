import React from "react";
import { useState, useEffect } from "react";

export const SampleEffect = () => {
  const [countDownDate, setcountdown] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcountdown(countDownDate + 1);
    }, 1000);

    // setTimeout(()=>{
    //     console.log("Hai")
    // },1000)
    return () => clearInterval(interval);
  });
  function timeOut() {
    setTimeout(() => {
      alert("Hello this is seTimeout");
    }, 7000);
  }

  return (
    <>
      <main style={{ background: "white", fontSize: "20px" }}>
        Hello There, this is cool :{countDownDate}
      </main>

      <button onClick={() => timeOut()}>Time</button>
    </>
  );
};
