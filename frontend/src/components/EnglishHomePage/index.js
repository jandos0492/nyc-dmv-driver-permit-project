import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom"
import LearnPage from "../LearnPage";
import "./EnglishHomePage.css";

const EnglishHomePage = ({ language }) => {

  return (
    <>
      {language === 'english' && (
        <div className="home">
          <Link to="/learn" className="home-card">
            <span>Learn</span>
          </Link>
          <Link to="/full-test" className="home-card">
            <span>Full Test</span>
          </Link>
          <Link to="/express-test" className="home-card">
            <span>Express Test</span>
          </Link>
        </div>
      )}
    </>
  );
};
export default EnglishHomePage;