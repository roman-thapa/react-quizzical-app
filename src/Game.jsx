import React from "react";
import he from 'he'
import { nanoid } from 'nanoid'

import TopRight from "./assets/game-tr.svg"
import BottomLeft from "./assets/game-bl.svg"

export default function Game(props) {

    (() => {
        props.data.map(info => {
            const randomIndex = Math.floor(
                Math.random() * (info.incorrect_answers.length + 1)
            )
            info.choices = info.incorrect_answers.map(choice => choice);
            info.choices.splice(randomIndex, 0, info.correct_answer)
        })
    }) ()
    
    const handleClick = () => {
        props.newGame()
    }

    function generateQuestions() {
        return props.data.map((info) => {
            return (
                <>
                    <label key={nanoid()}>{he.decode(info.question)}</label>
                    <div className="options">
                        {generateOptions(info)}
                    </div>
                    <hr />
                </>
            )
          });
    }

    function generateOptions(data) {
        return data.choices.map(item => (
            <button 
                key={nanoid()} 
                value={item}
                onClick={(event) => {
                    event.preventDefault()
                    console.log(item===data.correct_answer)
                }}
            >
                {he.decode(item)}
            </button>
        ))
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
                <form>
                    {generateQuestions()}
                </form>
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
