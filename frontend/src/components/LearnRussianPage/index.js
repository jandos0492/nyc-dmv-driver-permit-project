import React, { useContext } from "react";
import { TestContext } from "../../context/TestContext";
import LearnRussianCard from "../LearnRussianCard";
import "./LearnRussianPage.css";

const LearnRussianPage = () => {
  const { russianData, loading } = useContext(TestContext);

  if (loading) {
    return <div>Loading data...</div>
  }

  return (
    <div className="learn-list">
      {russianData.map((learnRussianCard) => (
        <LearnRussianCard
          key={learnRussianCard.id}
          no={learnRussianCard.no}
          question={learnRussianCard.question}
          answer={learnRussianCard.answers[learnRussianCard.correctAnswerIndex]}
        />
      ))}
    </div>
  )
}

export default LearnRussianPage;