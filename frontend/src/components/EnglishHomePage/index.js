import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom"
import LearnPage from "../LearnPage";
import "./EnglishHomePage.css";

const EnglishHomePage = ({ language }) => {

  return (
    <>
      {language === 'english' && (
        <div className="home">
          <Link to="/learn" className="home-card green">
            <span>Learn</span>
          </Link>
          <Link to="/full-test" className="home-card yellow">
            <span>Full Test</span>
          </Link>
          <Link to="/express-test" className="home-card red">
            <span>Express Test</span>
          </Link>
        </div>
      )}
    </>
  );
};
export default EnglishHomePage;