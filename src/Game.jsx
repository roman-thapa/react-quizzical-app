import React from "react";
import he from 'he';
import { nanoid } from 'nanoid';
import Questions from "./Questions";
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

    const [checkAnswer, setCheckAnswer] = React.useState(false)
    
    const handleClick = () => {
        checkAnswer && props.newGame()
        setCheckAnswer(prev=> !prev)
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
                <div>
                    <Questions 
                        data = {props.data}
                    />
                </div>
                <button 
                    className="start--quiz"
                    onClick={handleClick}
                >
                    {!checkAnswer ? "Check Answer" : "New Game"}
                </button>
            </div>
            <img 
              src={BottomLeft} 
              className="bottom--left"
            />
        </>
    )
}
