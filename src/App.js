//import React from 'react'
import './index.css'
import {useState} from 'react';

function Square(){
  const [value,setval]=useState(null);
  function clickboard(){
    setval('X');
  }
  return <button className="square" onClick={clickboard}>{value}</button>;
}

export default function Board(){
  return(
      <>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
  );
}