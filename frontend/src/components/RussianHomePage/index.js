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
           <p className="card-description">
            Изучите все вопросы и подготовтесь к тесту на получение водительского пермита в Нью-Йорке
           </p>
          </Link>
          <Link to="/ru/full-test" className="home-card yellow">
            <span>Полный Тест</span>
            <p className="card-description">
              Пройдите тест по всем вопросам и получите результат
            </p>
          </Link>
          <Link to="/ru/express-test" className="home-card red">
            <span>Быстрый Тест</span>
            <p className="card-description">
              Пройдите тест по 20 случайным вопросам, как в настоящем тесте
            </p>
          </Link>
        </div>
      )}
    </>
  );
};
export default RussianHomePage;