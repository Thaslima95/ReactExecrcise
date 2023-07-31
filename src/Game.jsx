import React from 'react'
import {Refresh} from '@styled-icons/foundation/Refresh';

export default function Game() {
  return (
    <div className="maincontainer">
      <div className="grid-container">
        <div><span style={{fontSize:"20px",fontWeight:"900",color:"#31c3bd"}}>X</span> <span style={{fontSize:"20px",fontWeight:"900",color:"#f2b137"}}>O</span></div>
        <div className="turntitle">X<span style={{fontSize:"10px",}}> &nbsp;Turn </span></div>
        <div className="reverse"style={{background:"#dbe8ed",color:"black"}}><Refresh size="25"/></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
 <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>
  <div className="grid-item"></div>  
  <div className="grid-item"></div>
  <div className="you">x(you)<br/>0</div>
  <div className="ties">Ties<br/>0</div>
  <div className="cpu">0(CPU)<br/>0</div>
</div>
    </div>
  )
}
