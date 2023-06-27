import React, { useContext } from "react";
import { TestContext } from "../../context/TestContext";
import LearnCard from "../LearnCard";
import "./LearnPage.css";

const LearnPage = () => {
  const { englishData, loading } = useContext(TestContext)

  if (loading) {
    return <div>Loading data...</div>
  }

  return (
    <div className="learn-list">
      {englishData.map((learnCard) => (
        <LearnCard 
          key={learnCard.id}
          no={learnCard.no}
          question={learnCard.question}
          answer={learnCard.answers[learnCard.correctAnswerIndex]}
          image={learnCard.image}
          />
      ))}
    </div>
  )
}

export default LearnPage;