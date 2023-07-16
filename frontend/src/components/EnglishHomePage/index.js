import React from "react";
import { Link } from "react-router-dom";
import "./EnglishHomePage.css";

const EnglishHomePage = ({ language }) => {
  return (
    <>
      {language === "english" && (
        <div className="home">
          <Link to="/learn-traffic-signs" className="home-card grey">
            <span>Learn Traffic Signs</span>
            <p className="card-description">
              Learn all the traffic signs for the NYC permit test
            </p>
          </Link>
          <Link to="/learn" className="home-card green">
            <span>Learn</span>
            <p className="card-description">
              Learn all the questions and prepare for the NYC permit test
            </p>
          </Link>
          <Link to="/full-test" className="home-card yellow">
            <span>Full Test</span>
            <p className="card-description">
              Pass all the questions test and get the result
            </p>
          </Link>
          <Link to="/express-test" className="home-card red">
            <span>Express Test</span>
            <p className="card-description">
              Pass only 20 random questions, like the real test in NYC DMV
            </p>
          </Link>
        </div>
      )}
    </>
  );
};

export default EnglishHomePage;
