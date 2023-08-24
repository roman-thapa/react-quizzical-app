import React from 'react'
import HomePage from './HomePage'
import Game from './Game'


function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  function start() {
    setStartQuiz(prev => !prev)
  }
  console.log(startQuiz)
  return (
    <>
      {!startQuiz && <HomePage 
        start={start}
      />}
      {startQuiz && <Game />}
      
    </>
    
  )
}
export default App
