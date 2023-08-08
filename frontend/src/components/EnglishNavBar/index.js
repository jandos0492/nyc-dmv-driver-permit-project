import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import "./EnglishNavBar.css";

const EnglishNavBar = ({ switchToRussian }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    switchToRussian();
    navigate("/ru")
  }

  return (
    <nav>
      <Link to={"/"}>
        <FontAwesomeIcon className="home-icon" icon={faHouse} />
      </Link>
      <button onClick={handleClick}>
        <img src="/images/language/ru.jpg" alt="Switch to Russian language" />
        <span>RU</span>
      </button>
    </nav>
  )
}

export default EnglishNavBar
