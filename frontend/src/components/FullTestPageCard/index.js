import React, { useState } from "react";
import "./FullTestPageCard.css";

const FullTestPageCard = ({ englishData, submitted }) => {
  const { no, question, answers, correctAnswerIndex, image } = englishData;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const isImage = image !== null;

  const resultClass = submitted
    ? selectedAnswer === String(correctAnswerIndex)
      ? "full-test-page-card__result-correct"
      : "full-test-page-card__result-incorrect"
    : "";

  return (
    <div className="full-test-page-card">
      <h4 className="full-test-page-card__number">{no}</h4>
      <div className="full-test-page-card__content">
        {isImage && <img src={image} alt="Question" className="full-test-page-card__image" />}
        <h3 className="full-test-page-card__question">{question}</h3>
        <div className="full-test-page-card__answers">
          {answers.map((answer, index) => (
            <label key={index} className="full-test-page-card__label">
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
          <p className={`full-test-page-card__result ${resultClass}`}>
            {selectedAnswer === String(correctAnswerIndex)
              ? "Correct answer!"
              : `Incorrect answer! The correct answer is: ${answers[correctAnswerIndex]}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default FullTestPageCard;
