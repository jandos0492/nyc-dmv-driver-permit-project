import React, { useContext } from "react";
import { TestContext } from "../../context/TestContext";
import TrafficSignsCard from "../TrafficSignsCard";
import "./TrafficSignsPage.css";

const TrafficSignsPage = () => {
  const { trafficSignsData, loading } = useContext(TestContext);

  if (loading) {
    return <div>Loading data...</div>
  }

  return (
    <div className="traffic-signs-list">
      {trafficSignsData.map((trafficSignCard) => (
        <TrafficSignsCard
          key={trafficSignCard.id}
          no={trafficSignCard.no}
          image={trafficSignCard.image}
          descriptionEnglish={trafficSignCard.descriptionEnglish}
        />
      ))}
    </div>
  );
};

export default TrafficSignsPage;