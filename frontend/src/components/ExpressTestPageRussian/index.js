import React, { useContext, useEffect, useState } from "react";
import { TestContext } from "../../context/TestContext";
import ExpressTestPageRussianCard from "../ExpressTestPageRussianCard";
import "./ExpressTestPageRussian.css";

const ExpressTestPageRussian = () => {
  const { russianData, loading } = useContext(TestContext);
  const [submitted, setSubmitted] = useState(false);
  const [randomRussianData, setRandomRussianData] = useState([]);

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

  if (loading) {
    return <div>Loading data...</div>
  }

  return (
    <div className="test-page">
      <div className="test-page__card-list">
        <form onSubmit={handleSubmit}>
          {randomRussianData.map((testCard, index) => (
            <ExpressTestPageRussianCard 
              key={testCard.id} 
              russianData={testCard} 
              submitted={submitted}
              idx={index} />
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