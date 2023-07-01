import React, { useState } from "react";
import "./ExpressTestPageCard.css";

const ExpressTestPageCard = ({ englishData, submitted, idx }) => {
  const { question, answers, correctAnswerIndex, image } = englishData;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const isImage = image !== null;

  const resultClass = submitted
    ? selectedAnswer === String(correctAnswerIndex)
      ? "test-page-card__result-correct"
      : "test-page-card__result-incorrect"
    : "";

  return (
    <div className="test-page-card">
      <h4 className="test-page-card__number">{idx + 1}</h4>
      <div className="test-page-card__content">
        {isImage && <img src={image} alt="Question" className="test-page-card__image" />}
        <h3 className="test-page-card__question">{question}</h3>
        <div className="test-page-card__answers">
          {answers.map((answer, index) => (
            <label key={index} className="test-page-card__label">
              <input
                type="radio"
                value={index}
                checked={selectedAnswer === String(index)}
                onChange={handleAnswerChange}
                disabled={submitted}
              />
              {answer}
            </label>
          ))}
        </div>
        {submitted && (
          <p className={`test-page-card__result ${resultClass}`}>
            {selectedAnswer === String(correctAnswerIndex)
              ? "Correct answer!"
              : `Incorrect! The correct answer is: ${answers[correctAnswerIndex]}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpressTestPageCard;
