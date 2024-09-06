import React, { useState } from "react";
import TopRight from "../assets/game-tr.svg";
import BottomLeft from "../assets/game-bl.svg";
import { nanoid } from "nanoid";
import he from "he";
import Options from "./Options";

function Game({ data, loading, newGame, checkAnswers, setCheckAnswer }) {
  const [arrOfUserAnswer, setArrOfUserAnswer] = useState(Array(5));
  const [correctCount, setCorrectCount] = useState(0);

  const handleCheckAnswer = () => {
    setCheckAnswer(true);
    arrOfUserAnswer.map((ans, i) => {
      ans === data[i].correct_answer && setCorrectCount((prev) => prev + 1);
    });
  };

  return (
    <>
      <img src={TopRight} className="top--right" />
      {!loading ? (
        <div className="quiz">
          <h1>Game Started!!!</h1>
          {data.map((item, index) => (
            <div key={nanoid()}>
              <label>{he.decode(item.question)}</label>
              <p>
                <Options
                  questionData={item}
                  index={index}
                  arrOfUserAnswer={arrOfUserAnswer}
                  setArrOfUserAnswer={setArrOfUserAnswer}
                  checkAnswers={checkAnswers}
                />
              </p>
              <hr />
            </div>
          ))}
          {!checkAnswers ? (
            <div>
              <button
                className="start--quiz"
                type="button"
                onClick={handleCheckAnswer}
              >
                Check Answers
              </button>
            </div>
          ) : (
            <>
              <h1>You scored {correctCount}/5 correct</h1>
              <button
                className="start--quiz"
                onClick={() => {
                  setCorrectCount(0);
                  newGame();
                  setArrOfUserAnswer(Array(5));
                }}
              >
                New Game
              </button>
            </>
          )}
        </div>
      ) : (
        <h1>Loading data</h1>
      )}
      <img src={BottomLeft} className="bottom--left" />
    </>
  );
}

export default Game;
