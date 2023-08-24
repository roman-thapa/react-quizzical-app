import React from 'react'
import HomePage from './HomePage'

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  function start() {
    setStartQuiz(prev => !prev)
  }
  console.log(startQuiz)
  return (
    <>
      <h1>Quizzical</h1>
      {!startQuiz && <HomePage 
        start={start}
      />}
    </>
  )
}
export default App
