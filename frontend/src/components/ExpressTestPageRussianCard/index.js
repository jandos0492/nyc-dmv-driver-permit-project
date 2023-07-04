import React, { useState } from "react";
import "./ExpressTestPageRussianCard.css";

const ExpressTestPageRussianCard = ({ russianData, submitted, idx, onAnswerSubmit }) => {
  const { question, answers, correctAnswerIndex } = russianData;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
    const isAnswerCorrect = e.target.value === String(correctAnswerIndex);
    if (isAnswerCorrect) {
      onAnswerSubmit(true);
    }
  };

  const resultClass = submitted
    ? selectedAnswer === String(correctAnswerIndex)
      ? "test-page-card__result-correct"
      : "test-page-card__result-incorrect"
    : "";

  return (
    <div className="test-page-card">
      <h4 className="test-page-card__number">{idx + 1}</h4>
      <div className="test-page-card__content">
        <h3 className="test-page-card__question">{question}</h3>
        <div className="test-page-card__answers">
          {answers.map((answer, index) => {
            const hasImage = answer.includes("images");
            return (
              <label key={index}>
                <input
                  type="radio"
                  value={index}
                  checked={selectedAnswer === String(index)}
                  onChange={handleAnswerChange}
                  disabled={submitted}
                />
                {!hasImage && <span>{answer}</span>}
                {hasImage && (
                  <img src={`/${answer}`} alt="Ответ" className="test-page-card__answer-image" />
                )}
              </label>
            );
          })}
        </div>
        {submitted && (
          <p className={`test-page-card__result ${resultClass}`}>
            {selectedAnswer === String(correctAnswerIndex) ? (
              "Правильно!"
            ) : (
              <span>
                Не правильно! Правильный ответ:{" "}
                {answers[correctAnswerIndex].includes("images") ? (
                  <img 
                    src={`/${answers[correctAnswerIndex]}`}
                    alt="Правильный ответ"
                    className="test-page-card__correct-answer-image"
                  />
                ) : (
                  answers[correctAnswerIndex]
                )}
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpressTestPageRussianCard;