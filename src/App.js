//import React from 'react'
import './index.css'
import {useState} from 'react';

function Square({value,clicktile}){
    return <button className="square" onClick={clicktile}>{value}</button>;
}

export default function Board(){
    const [squares,setsq]=useState(Array(9).fill(null));
    const [xup,setxup]=useState(true);
    function tileclick(i){

        const nextsquares=squares.slice();
        (xup)?nextsquares[i]="X":nextsquares[i]="O";
        setsq(nextsquares);
        setxup(!xup);
    }
    return(
        <>
            <div className="board-row">
                <Square value={squares[0]} clicktile={()=>tileclick(0)} />
                <Square value={squares[1]} clicktile={()=>tileclick(1)} />
                <Square value={squares[2]} clicktile={()=>tileclick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} clicktile={()=>tileclick(3)} />
                <Square value={squares[4]} clicktile={()=>tileclick(4)} />
                <Square value={squares[5]} clicktile={()=>tileclick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} clicktile={()=>tileclick(6)} />
                <Square value={squares[7]} clicktile={()=>tileclick(7)} />
                <Square value={squares[8]} clicktile={()=>tileclick(8)} />
            </div>
        </>
    );
}