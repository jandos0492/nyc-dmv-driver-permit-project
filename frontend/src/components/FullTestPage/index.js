import React, { useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestContext";
import FullTestPageCard from "../FullTestPageCard";
import "./FullTestPage.css";

const FullTestPage = () => {
  const { englishData, loading } = useContext(TestContext);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="full-test-page">
      <div className="full-test-page__card-list">
        <form onSubmit={handleSubmit}>
          {englishData.map((testCard) => (
            <FullTestPageCard key={testCard.id} englishData={testCard} submitted={submitted} />
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