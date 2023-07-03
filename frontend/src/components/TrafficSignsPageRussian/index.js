import React, { useContext } from "react" ;
import { TestContext } from "../../context/TestContext";
import TrafficSignsCardRussian from "../TrafficSignsCardRussian";
import "./TrafficSignsPageRussian.css";

const TrafficSignsPageRussian = () => {
  const { trafficSignsData , loading } = useContext(TestContext);

  if (loading) {
    return <div>Loading data...</div>
  }

  return (
    <div className="traffic-signs-list">
      {trafficSignsData.map((trafficSignCard) => (
        <TrafficSignsCardRussian
          key={trafficSignCard.id}
          no={trafficSignCard.no}
          image={trafficSignCard.image}
          descriptionRussian={trafficSignCard.descriptionRussian}
        />
      ))}
    </div>
  );
};

export default TrafficSignsPageRussian;