import styles from './QuestionAndAnswer.module.css';
import { useState, useEffect } from 'react';

function QuestionAndAnswer({ item }) {
  const [questions, setQuestions] = useState(item.questions || []);
  const [newQuestion, setNewQuestion] = useState("");

  // Fetch latest questions on mount/refresh
  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/items/${item._id}`);
        if (!res.ok) throw new Error("Failed to fetch item");
        const data = await res.json();
        setQuestions(data.questions || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchItem();
  }, [item._id]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/items/${item._id}/questions`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newQuestion, answer: "" })
      });

      if (!res.ok) throw new Error("Failed to add question");

      const updatedItem = await res.json();
      setQuestions(updatedItem.questions || []);
      setNewQuestion(""); // clear input
    } catch (err) {
      console.error("Error in handleSubmit:", err);
    }
  }

  return (
    <div className={styles.content}>
      <h2>Questions & Answers</h2>

      <div className={styles.questionAnswerContainer}>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionBubble}>
            {question.text} {question.answer && `- ${question.answer}`}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Type your question..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Ask A Question
        </button>
      </form>
    </div>
  );
}

export default QuestionAndAnswer;