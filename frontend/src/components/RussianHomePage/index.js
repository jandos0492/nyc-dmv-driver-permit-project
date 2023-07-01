import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TestContext } from "../../context/TestContext";
import "./RussianHomePage.css";

const RussianHomePage = ({ language }) => {
  const { russianData } = useContext(TestContext)
  return (
    <>
      {language === 'russian' && russianData && (
        <div className="home">
          <Link to="/ru/learn" className="home-card green">
           <span>Подготовка</span> 
          </Link>
          <Link to="/ru/full-test" className="home-card yellow">
            <span>Полный Тест</span>
          </Link>
          <Link to="/ru/express-test" className="home-card red">
            <span>Быстрый Тест</span>
          </Link>
        </div>
      )}
    </>
  );
};
export default RussianHomePage;