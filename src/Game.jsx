import React from "react";

import TopRight from "./assets/game-tr.svg"
import BottomLeft from "./assets/game-bl.svg"

export default function Game(props) {
    const handleClick = () => {
        props.newGame()
        console.log(props.data)
    }
    return (
        <>
            <img 
                src={TopRight} 
                className="top--right"
            />
            <div>
                <h1>
                    Game Started!!!
                </h1>
                <button 
                    className="start--quiz"
                    onClick={handleClick}
                >
                    New Game
                </button>
            </div>
            <img 
              src={BottomLeft} 
              className="bottom--left"
            />
        </>
    )
}