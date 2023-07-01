import React, { useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestContext";
import ExpressTestPageCard from "../ExpressTestPageCard";
import "./ExpressTestPage.css";

const ExpressTestPage = () => {
  const { englishData, loading } = useContext(TestContext);
  const [submitted, setSubmitted] = useState(false);
  const [randomEnglishData, setRandomEnglishData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    const shuffledArray = [...englishData].sort(() => Math.random() - 0.5);
    const ranodmData = shuffledArray.slice(0, 20);
    setRandomEnglishData(ranodmData);
  }, [englishData]);

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="test-page">
      <div className="test-page__card-list">
        <form onSubmit={handleSubmit}>
          {randomEnglishData.map((testCard, index) => (
            <ExpressTestPageCard 
              key={testCard.id} 
              englishData={testCard} 
              submitted={submitted} 
              idx={index} />
          ))}
          <button type="submit" disabled={submitted} className="test-page__submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpressTestPage;
