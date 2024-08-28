import React, { useState } from "react";
import he from 'he'

const Options = ({
  questionData,
  index,
  setArrOfUserAnswer,
  arrOfUserAnswer,
  checkAnswers,
}) => {
  const { correct_answer, incorrect_answers } = questionData;
  const allAnswers = [...incorrect_answers, correct_answer];
  const shuffledAnswers = allAnswers.sort();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const userAnswer = (index, selectedAnswer) => {
    setArrOfUserAnswer((prev) => {
      const newArray = [...prev];
      newArray[index] = selectedAnswer;
      return newArray;
    });
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    userAnswer(index, answer);
  };

  return (
    <div>
      {checkAnswers
        ? shuffledAnswers.map((answer, ind) => (
            <button
              key={ind}
              className={`${
                arrOfUserAnswer[index] === answer
                  ? answer === correct_answer
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
            >
              {he.decode(answer)}
            </button>
          ))
        : shuffledAnswers.map((answer, ind) => (
            <button
              key={ind}
              className={`${
                arrOfUserAnswer[index] === answer ? "selected" : ""
              }`}
              onClick={() => {
                handleAnswerClick(answer);
              }}
            >
              {he.decode(answer)}
            </button>
          ))}
    </div>
  );
};

export default Options;
