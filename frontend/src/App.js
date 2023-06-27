import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EnglishNavBar from "./components/EnglishNavBar";
import RussianNavBar from "./components/RussianNavBar";
import RussianHomePage from "./components/RussianHomePage";
import EnglishHomePage from "./components/EnglishHomePage";
import LearnPage from "./components/LearnPage";
import LearnRussianPage from "./components/LearnRussianPage";
import FullTestPage from "./components/FullTestPage";
import './App.css';

function App() {
  const [language, setLanguage] = useState("english");

  const switchToRussian = () => {
    setLanguage("russian");
  };

  const switchToEnglish = () => {
    setLanguage("english");
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    if(currentPath.includes("/ru")) {
      setLanguage("russian");
    } else {
      setLanguage("english");
    }
  }, [])

  return (
    <div>
      {language === "english" ? (
        <EnglishNavBar switchToRussian={switchToRussian} />
      ) : (
        <RussianNavBar switchToEnglish={switchToEnglish} />
      )}
      <Routes>
        <Route path="/" element={<EnglishHomePage language={language}/>} />
        <Route path="/ru" element={<RussianHomePage language={language} />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/ru/learn" element={<LearnRussianPage />} />
        <Route path="/full-test" element={<FullTestPage />} />
      </Routes>
    </div>
  );
}

export default App;
