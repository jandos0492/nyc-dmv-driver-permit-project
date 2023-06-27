import React from "react";
import "./LearnCard.css";

const LearnCard = ({ no, question, answer, image }) => {
  return (
    <article className="learn-card">
      <h4 className="learn-card__number">{no}</h4>
      <div className="learn-card__content">
        <div className="learn-card__question-section">
          <h3 className="learn-card__question">Question:</h3>
          {image && <img src={image} alt="Question" className="learn-card__image" />}
          <p className="learn-card__question-text">{question}</p>
        </div>
        <div className="learn-card__answer-section">
          <h3 className="learn-card__answer">Answer:</h3>
          <p className="learn-card__answer-text">{answer}</p>
        </div>
      </div>
    </article>
  );
};

export default LearnCard;
