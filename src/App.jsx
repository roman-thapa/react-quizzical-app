import React from 'react'
import HomePage from './HomePage'
import Game from './Game'


export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  const [quizData, setQuizData] = React.useState('')
  const [newGame, setNewGame] = React.useState(false)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
        setQuizData(data)
      })
  }, [startQuiz, newGame])
  
  function startNewGame() {
    setNewGame(prev => !prev)
  }
  

  function start() {
    setStartQuiz(prev => !prev)
  }
  return (
    <>
      {!startQuiz ?
        <HomePage 
          start={start}
        /> : 
        <Game 
          data={quizData.results}
          newGame={startNewGame}
        />
      }
    </>
  )
}
