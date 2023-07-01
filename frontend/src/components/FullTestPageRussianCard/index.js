import React, { useState } from "react";
import "./FullTestPageRussianCard.css";

const FullTestPageRussianCard = ({ russianData, submitted }) => {
  const { no, question, answers, correctAnswerIndex } = russianData;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const resultClass = submitted
    ? selectedAnswer === String(correctAnswerIndex)
      ? "full-test-page-card__result-correct"
      : "full-test-page-card__result-incorrect"
    : "";

  return (
    <div className="full-test-page-card">
      <h4 className="full-test-page-card__number">{no}</h4>
      <div className="full-test-page-card__content">
        <h3 className="full-test-page-card__question">{question}</h3>
        <div className="full-test-page-card__answers">
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
                  <img src={`/${answer}`} alt="Answer" className="full-test-page-card__answer-image" />
                )}
              </label>
            );
          })}
        </div>
        {submitted && (
          <p className={`full-test-page-card__result ${resultClass}`}>
            {selectedAnswer === String(correctAnswerIndex) ? (
              "Правильно!"
            ) : (
              <span>
                Не правильно. Правильный ответ:{" "}
                {answers[correctAnswerIndex].includes("images") ? (
                  <img
                    src={`/${answers[correctAnswerIndex]}`}
                    alt="Correct Answer"
                    className="full-test-page-card__correct-answer-image"
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

export default FullTestPageRussianCard;
