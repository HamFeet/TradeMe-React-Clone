import styles from './QuestionAndAnswer.module.css'
import { useState } from 'react'

function QuestionAndAnswer() {
  const [questions, setQuestions] = useState([
    "How many kms does it have on the clock? Also how many owners has it had?",
    "Will you accept $3500?"
  ]);

  function handleClick() {
    console.log("Button Clicked");
    setQuestions(prev => [...prev, "new question added!"]);
  }

  return (
    <div className={styles.content}>
      <h2>Questions & Answers</h2>
      <div className={styles.questionAnswerContainer}>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionBubble}>{question}</div>
        ))}
      </div>
      <button className={styles.button} onClick={handleClick}>Ask A Question</button>
    </div>
  );
}

export default QuestionAndAnswer;