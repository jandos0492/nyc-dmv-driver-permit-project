import React, { useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestContext";
import FullTestPageCard from "../FullTestPageCard";
import "./FullTestPage.css";

const FullTestPage = () => {
  const { englishData, loading } = useContext(TestContext);
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  // Handling the result render for the full test page
  const handleAnswerSubmit = (isAnswerCorrect) => {
    if (isAnswerCorrect) {
      setCorrectAnswerCount((prevCount) => prevCount + 1);
    }
  };

  const calculatePercentage = () => {
    const totalQuestions = englishData.length;
    const percentage = (correctAnswerCount / totalQuestions) * 100;
    return percentage.toFixed(0);
  }

  const renderResultMessage = () => {
    const percentage = calculatePercentage();
    if (submitted && percentage >= 70) {
      return (
        <div className="test-page-result">
          <span className="test-page__result-pass">
            Congratulations! You passed the test. Your score is: {percentage}%.
          </span>
        </div>
      )
    } else if (submitted && percentage <= 70) {
      return (
        <div className="test-page-result">
          <span className="test-page__result-fail">
            You failed. Your score is: {percentage}%. You need to get at least 70% to pass the test.
          </span>
        </div>
      )
    } else {
      return null;
    }
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="test-page">
      {renderResultMessage()}
      <div className="test-page__card-list">
        <form onSubmit={handleSubmit}>
          {englishData.map((testCard) => (
            <FullTestPageCard
              key={testCard.id}
              englishData={testCard}
              submitted={submitted}
              onAnswerSubmit={handleAnswerSubmit}
            />
          ))}
          <button type="submit" disabled={submitted} className="test-page__submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FullTestPage;