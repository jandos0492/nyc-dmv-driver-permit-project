import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import "./RussianNavBar.css";

const RussianNavBar = ({ switchToEnglish }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    switchToEnglish();
    navigate("/")
  }

  return (
    <nav>
      <Link to={"/ru"}>
        <FontAwesomeIcon className="home-icon" icon={faHouse} />
      </Link>
      <button onClick={handleClick}>
        <img src="/images/language/eng.jpg" alt="Switch to English language" />
        <span>EN</span>
      </button>
    </nav>
  )
}

export default RussianNavBar;