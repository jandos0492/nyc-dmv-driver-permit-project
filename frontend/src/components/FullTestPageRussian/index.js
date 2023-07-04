import React, { useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestContext";
import FullTestPageRussianCard from "../FullTestPageRussianCard";

const FullTestPageRussian = () => {
  const { russianData, loading } = useContext(TestContext);
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

  const handleAnswerSubmit = (isAnswerCorrect) => {
    if (isAnswerCorrect) {
      setCorrectAnswerCount((prevCount) => prevCount + 1);
    }
  };

  const calculatePercentage = () => {
    const totalQuestions = russianData.length;
    const percentage = (correctAnswerCount / totalQuestions) * 100;
    return percentage.toFixed(0);
  };

  const renderResultMessage = () => {
    const percentage = calculatePercentage();
    if (submitted && percentage >= 70) {
      return (
        <div className="test-page-result">
          <span className="test-page__result-pass">
            Поздравляем! Вы успешно прошли тест. Ваш результат: {percentage}%.
          </span>
        </div>
      )
    } else if (submitted && percentage <= 70) {
      return (
        <div className="test-page-result">
          <span className="test-page__result-fail">
            Вы не прошли тест! Ваш результат: {percentage}%. Вам нужно набрать 70% и более, чтобы пройти тест.
          </span>
        </div>
      )
    } else {
      return null;
    }
  }

  if (loading) {
    return <div>Loading data...</div>
  }

  return (
    <div className="test-page">
      {renderResultMessage()}
      <div className="test-page__card-list">
        <form onSubmit={handleSubmit}>
          {russianData.map((testCard) => (
            <FullTestPageRussianCard 
            key={testCard.id} 
            russianData={testCard} 
            submitted={submitted}
            onAnswerSubmit={handleAnswerSubmit}
          />
          ))}
          <button type="submit" disabled={submitted} className="test-page__submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}

export default FullTestPageRussian;