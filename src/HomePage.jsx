import React from "react";

import TopRight from "./assets/top-right.svg"
import BottomLeft from "./assets/bottom-left.svg"

export default function HomePage(props) {
    const handleClick = () => {
        props.start()
    }
    return (
        <div className="home--page">
            
            <img 
                src={TopRight} 
                className="top--right"
            />
            <h1>
                Quizzical
            </h1>
            <div>
                <p>Welcome to Quizzila!</p>
                <p>In this quiz game, you'll encounter multiple-choice questions.</p>
                <p>Click on the answer you think is right, then hit "Check Answer" to see if you're correct and score points.</p>
                <p>Challenge yourself across various topics and have fun!</p>
            </div>
            <button 
                className="start--quiz"
                onClick={handleClick}
            >
                Start Quiz
            </button>
            <img 
              src={BottomLeft} 
              className="bottom--left"
            />
        </div>
    )
}