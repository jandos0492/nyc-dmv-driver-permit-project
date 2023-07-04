import React, { useContext, useEffect, useState } from "react";
import { TestContext } from "../../context/TestContext";
import ExpressTestPageRussianCard from "../ExpressTestPageRussianCard";
import "./ExpressTestPageRussian.css";

const ExpressTestPageRussian = () => {
  const { russianData, loading } = useContext(TestContext);
  const [submitted, setSubmitted] = useState(false);
  const [randomRussianData, setRandomRussianData] = useState([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    const shuffleArray = [...russianData].sort(() => Math.random() - 0.5);
    const randomData = shuffleArray.slice(0, 20);
    setRandomRussianData(randomData);
  }, [russianData]);

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
    const totalQuestions = randomRussianData.length;
    const percentage = (correctAnswerCount / totalQuestions) * 100;
    return percentage.toFixed(0);
  };

  const renderResultMessage = () => {
    const percentage = calculatePercentage();
    if (submitted && percentage >= 70) {
      return (
        <span className="test-page__result-pass">
          Поздравляем! Вы успешно прошли тест. Ваш результат: {percentage}%.
        </span>
      )
    } else if (submitted && percentage <= 70) {
      return (
        <span className="test-page__result-fail">
          Вы не прошли тест! Ваш результат: {percentage}%. Вам нужно набрать 70% и более, чтобы пройти тест.
        </span>
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
          {randomRussianData.map((testCard, index) => (
            <ExpressTestPageRussianCard 
              key={testCard.id} 
              russianData={testCard} 
              submitted={submitted}
              idx={index} 
              onAnswerSubmit={handleAnswerSubmit}
            />
          ))}
          <button type="submit" disabled={submitted} className="test-page__submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpressTestPageRussian;