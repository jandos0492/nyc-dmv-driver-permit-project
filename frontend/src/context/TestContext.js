import React, { createContext, useState, useEffect } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [englishData, setEnglishData] = useState(null);
  const [russianData, setRussianData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching the englishData
        const englishResponse = await fetch("http://localhost:8080/api/english");
        const englishData = await englishResponse.json();
        setEnglishData(englishData);

        // Fetching the russianData
        const russianResponse = await fetch("http://localhost:8080/api/russian");
        const russianData = await russianResponse.json();
        setRussianData(russianData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const providerValues = {
    englishData,
    russianData,
    loading,
  };

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <TestContext.Provider value={providerValues}>
      {children}
    </TestContext.Provider>
  )
};