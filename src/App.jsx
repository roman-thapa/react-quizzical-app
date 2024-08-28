import React, { useState } from "react";
import HomePage from "./component/HomePage";
import Game from "./component/Game";

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [quizData, setQuizData] = React.useState("");
  const [newGame, setNewGame] = React.useState(false);
  const [checkAnswers, setCheckAnswer] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    fetchQuizData();
  }, [startQuiz, newGame]);

  const fetchQuizData = async () => {
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setQuizData(data);
    } catch (error) {
      console.error("There was an error fetching the quiz data:", error);
    } finally {
      setLoading(false);
    }
  };

  function startNewGame() {
    setNewGame((prev) => !prev);
    setLoading(true);
    setCheckAnswer(false) 
  }

  function start() {
    setStartQuiz((prev) => !prev);
    setLoading(true);
  }
  return (
    <>
      {!startQuiz ? (
        <HomePage start={start} />
      ) : (
        <Game
          data={quizData.results}
          newGame={startNewGame}
          setCheckAnswer={setCheckAnswer}
          checkAnswers={checkAnswers}
          loading={loading}
        />
      )}
    </>
  );
}
