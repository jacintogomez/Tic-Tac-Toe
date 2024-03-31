//import React from 'react'
import './index.css'
import {useState} from 'react';

function Square({value,clicktile}){
    return <button className="square" onClick={clicktile}>
        {value}
    </button>;
}

function Board({xup,squares,onplay}){
    function tileclick(i){
        if(win(squares)||squares[i]){return;}
        const nextsquares=squares.slice();
        (xup)?nextsquares[i]="X":nextsquares[i]="O";
        onplay(nextsquares);
        console.log('xup is '+xup);
    }
    const winner=win(squares);
    let status;
    if(winner){status="Winner is "+winner;}
    else{status="Next player: "+(xup?"X":"O");}
    return(
        <>
            <div className="status">{status}</div>
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

export default function Game(){
    const [xup,setxup]=useState(true);
    const [hist,sethist]=useState([Array(9).fill(null)]);
    const currentsq=hist[hist.length-1];
    const [curmov,setcurmov]=useState(0);
    function handleplay(nextsquares){
        sethist([...hist,nextsquares]);
        setxup(!xup);
    }
    function jumpto(nxmove){
        setcurmov(nxmove);
        setxup(nxmove%2===0);
    }
    const moves=hist.map((squares,move)=>{
        let description;
        if(move>0){description='Go to move #'+move;}
        else{description='Go to game start';}
        return(
            <li key={move}>
                <button onClick={()=>jumpto(move)}>{description}</button>
            </li>
        );
    });
    return(
        <div className="game">
            <div className="game-board">
                <Board xup={xup} squares={currentsq} onplay={handleplay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function win(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}