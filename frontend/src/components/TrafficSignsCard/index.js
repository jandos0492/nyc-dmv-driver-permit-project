import React from "react";
import "./TrafficSignsCard.css"

const TrafficSignsCard = ({ no, image, descriptionEnglish }) => {
  return (
    <article className="traffic-sign-card">
      <h4 className="traffic-sign-card__number">{no}</h4>
      <div className="traffic-sign-card__content">
        <img src={image} alt="Traffic Sign Image" className="traffic-sign-card__image" />
        <p className="traffic-sign-card__description">{descriptionEnglish}</p>
      </div>
    </article>
  );
};

export default TrafficSignsCard;