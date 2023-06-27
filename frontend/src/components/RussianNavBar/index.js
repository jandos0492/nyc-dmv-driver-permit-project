import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RussianNavBar.css";

const RussianNavBar = ({ switchToEnglish }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    switchToEnglish();
    navigate("/")
  }

  return (
    <nav>
      <Link to={"/ru"}>Главная</Link>
      <button onClick={handleClick}>
        <img src="/images/language/eng.jpg" alt="Switch to English language" />
        <span>EN</span>
      </button>
    </nav>
  )
}

export default RussianNavBar;