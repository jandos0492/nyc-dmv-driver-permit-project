import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EnglishNavBar.css";

const EnglishNavBar = ({ switchToRussian }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    switchToRussian();
    navigate("/ru")
  }

  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <button onClick={handleClick}>
        <img src="/images/language/ru.jpg" alt="Switch to Russian language" />
        <span>RU</span>
      </button>
    </nav>
  )
}

export default EnglishNavBar
