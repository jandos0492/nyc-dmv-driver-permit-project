import React, { createContext, useState, useEffect } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [englishData, setEnglishData] = useState(null);
  const [russianData, setRussianData] = useState(null);
  const [trafficSignsData, setTrafficSignsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching the englishData
        const englishResponse = await fetch("/api/english");
        const englishData = await englishResponse.json();
        setEnglishData(englishData);

        // Fetching the russianData
        const russianResponse = await fetch("/api/russian");
        const russianData = await russianResponse.json();
        setRussianData(russianData);

        // Fetching the trafficSignsData
        const trafficSignsResponse = await fetch("/api/traffic-signs");
        const trafficSignsData = await trafficSignsResponse.json();
        setTrafficSignsData(trafficSignsData);

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
    trafficSignsData,
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