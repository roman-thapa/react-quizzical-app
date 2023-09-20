import React from "react";
import he from 'he';
import { nanoid } from 'nanoid';

export default function Questions(props) {
  function generateChoice(questionId, choices) {
    return choices.map(choice => (
      <button key={nanoid()} id={questionId}>
        {choice}
      </button>
      
    ));
  }

  function generateQuestions() {
    return props.data.map(items => {
      const questionId = nanoid();
      return (
        <div key={nanoid()}>
          <label htmlFor={questionId}>
            {he.decode(items.question)}
          </label>
          <p>
            {generateChoice(questionId, items.choices)}
          </p>
          <hr />
        </div>
      );
    });
  }

  return (
    <form>
      {generateQuestions()}
    </form>
  );
}
