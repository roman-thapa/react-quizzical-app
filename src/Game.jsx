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
        console.log(props.data)
    }

    function generateQuestions() {
        return props.data.map((info) => {
            return (
                <>
                    <p key={nanoid}>{he.decode(info.question)}</p>
                    <hr />
                </>
            )
          });
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
                    {generateQuestions()}
                </div>
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

/**[
    {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the Finnish word for &quot;Finland&quot;?",
        "correct_answer": "Suomi",
        "incorrect_answers": [
            "Eesti",
            "Magyarorsz&aacute;g",
            "Sverige"
        ],
        "choices": [
            "Suomi",
            "Eesti",
            "Magyarorsz&aacute;g",
            "Sverige"
        ]
    }
]*/

/**[
    {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the Finnish word for &quot;Finland&quot;?",
        "correct_answer": "Suomi",
        "incorrect_answers": [
            "Eesti",
            "Magyarorsz&aacute;g",
            "Sverige"
        ],
        "choices": [
            "Eesti",
            "Magyarorsz&aacute;g",
            "Sverige",
            "Suomi"
        ]
    }
]*/
