import { SectionDimensions } from "@styled-icons/fa-solid/Section";
import React from "react";
import { useState, useEffect } from "react";
import { SignIntersectionSide } from "styled-icons/bootstrap";

export default function Counter() {
  const [daystimer, setDaysTimer] = useState();
  const [hourstimer, setHoursTimer] = useState();
  const [minutestimer, setMinutesTimer] = useState();
  const [secondstimer, setSecondsTimer] = useState();
  const timerCalculate = () => {
    const countdownDate = new Date("Aug 05,2023").getTime();
    // console.log(countdownDate);
    let timerinterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      console.log(distance);
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      // console.log(days);
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      // console.log(hours);
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(timerinterval);
      } else {
        setDaysTimer(days);
        setHoursTimer(hours);
        setMinutesTimer(minutes);
        setSecondsTimer(seconds);
      }
    });
  };
  useEffect(() => {
    timerCalculate();
  });

  return (
    <>
      <div className="timer">
        <div className="titletimer">
          <h2>CountDown Timer</h2>
        </div>
        <div className="subtimer">
          <p className="Value">{daystimer}</p>
          <p>:</p>
          <p>Days &nbsp; &nbsp;</p>
          <p className="Value">{hourstimer}</p>
          <p>:</p>
          <p>Hours &nbsp; &nbsp;</p>
          <p className="Value">{minutestimer}</p>
          <p>:</p>
          <p>Minutes &nbsp; &nbsp;</p>
          <p className="Value">{secondstimer}</p>
          <p>:</p>
          <p>Seconds</p>
        </div>
      </div>
    </>
  );
}
