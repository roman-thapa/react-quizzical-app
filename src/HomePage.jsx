import React from "react";

export default function HomePage(props) {
    const handleClick = () => {
        props.start()
    }
    return (
        <>
            <h1>
                HOME Page Rendered
            </h1>
            <button onClick={handleClick}>
                Start Quiz
            </button>
        </>
    )
}